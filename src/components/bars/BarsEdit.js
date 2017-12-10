import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import BarsForm from './BarsForm';

const category = [];

class BarsEdit extends React.Component {


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
      type: '',
      category: [],
      rating: ''
    },
    errors: {}
  };

  componentDidMount() {
    console.log(this);
    Axios
      .get(`/api/bars/${this.props.match.params.id}`)
      .then(res => this.setState({ bar: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleChange = ({ target: { name, value } }) => {
    const bar = Object.assign({}, this.state.bar, {[name]: value});
    this.setState({ bar });
  }

  handleMultipleInput = (e) => {
    const chosen = e.target.checked;
    console.log(chosen);

    if (chosen){
      const newCategories = Object.assign({}, this.state.bar.category.push(e.target.value));
      this.setState({category: newCategories});
    }
  }

  handleLocationChange = (name, address, location, website) => {
    const bar = Object.assign({}, this.state.bar, { name, address, location, website });
    this.setState({ bar });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('edit submit was hit!', this);
    console.log('submit was hit and this is what I sent:', this.state.bar);

    Axios
      .put(`/api/bars/${this.props.match.params.id}`, this.state.bar, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.props.history.push(`/bars/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return(
      <BarsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLocationChange={this.handleLocationChange}
        handleMultipleInput={this.handleMultipleInput}
        bar={this.state.bar}
        errors={this.state.errors}
      />
    );
  }

}

export default BarsEdit;
