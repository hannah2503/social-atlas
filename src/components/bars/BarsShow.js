import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import BackButton from '../utilities/BackButton';
import GoogleMap from '../utilities/GoogleMap';
import CommentBox from '../utilities/CommentBox';

class BarsShow extends React.Component {
  state = {
    bar: {
      name: '',
      address: '',
      location: {
        lat: '',
        lng: ''
      },
      image: '',
      website: '',
      description: '',
      category: [],
      type: '',
      rating: '',
      comments: []
    },
    errors: {},
    comment: {
      content: ''
    }
  };

  deleteBar = () => {
    Axios
      .delete(`/api/bars/${this.props.match.params.id}`, {
        headers: {'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/bars'))
      .catch(err => console.log(err));
  }

  componentDidMount(){
    Axios
      .get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bar: res.data }))
      .catch(err => console.log(err));
  }

  commentChange = ({ target: { name, value } }) => {
    this.setState({ comment: {[name]: value} });
  }

  commentSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/bars/${this.state.bar.id}/comments`, this.state.comment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        const bar = Object.assign({}, this.state.bar, { comments: res.data.comments });
        this.setState({ bar, comment: { content: ''} });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));

  }

  commentDelete = (e) => {
    const commentId = e.target.value;

    Axios
      .delete(`/api/bars/${this.state.bar.id}/comments/${commentId}`, {
        headers: {'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => {
        const comments = this.state.bar.comments.filter(comment => comment.id !== commentId);
        const bar = Object.assign({}, this.state.bar, { comments });
        this.setState({ bar });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));

  }

  render(){
    const stars = [];
    for (var i = 0; i < this.state.bar.rating; i++) stars.push(1);
    return(
      <div className="wrapper">
        <div className="show">
          <img src={this.state.bar.image}/>
          <p className="type">{this.state.bar.type}</p>
          <a href={this.state.bar.website} target="_blank"><h1>{this.state.bar.name}</h1></a>

          <p className="stars">{ stars.map((star, i) => <span key={i}>&#11088;</span>)}</p>

          <p className="font-address">{this.state.bar.address}</p>
          <p>{this.state.bar.description}</p>


          <div className="categories">
            <span className="category">{this.state.bar.category[0]}</span>
            <span className="category">{this.state.bar.category[1]}</span>
            <span className="category">{this.state.bar.category[2]}</span>
            <span className="category">{this.state.bar.category[3]}</span>
            <span className="category">{this.state.bar.category[4]}</span>
          </div>

          <p>Author: {this.state.bar.createdBy && this.state.bar.createdBy.firstName}</p>
          <div className="buttons">
            <Link to={`/bars/${this.state.bar.id}/edit`}><button className="grey-button-button">edit</button></Link>
            <a onClick={this.deleteBar}><button className="grey-button-button">delete</button></a>
          </div>

          {this.state.bar.location.lat && <GoogleMap center={this.state.bar.location} />}

          <hr/>
          <h2>Comments:</h2>

          { this.state.bar.comments && this.state.bar.comments.map(comment =>
            <div key={comment.id}>
              <p>{comment.content}</p>
              <p>{comment.createdBy.firstName}</p>
              <button value={comment.id} onClick={this.commentDelete}>delete</button>
            </div>
          )}
          <CommentBox
            comment={this.state.comment} commentChange={this.commentChange} commentSubmit={this.commentSubmit}/>
          <hr/>
          <Link to="/bars" className="grey-button-button"><button className="grey-button-button">back</button></Link>

        </div>
      </div>
    );
  }
}
export default BarsShow;
