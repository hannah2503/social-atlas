import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import BarsForm from './BarsForm';

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
    categories: ['Fun with Friends', 'Date Night', 'Family Meal', 'Light Bite', 'Experimental'],
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

  handleMultipleInput = ({ target: { name, value } }) => {
    console.log(name, value);
    let newBarCategories;
    if (!this.state.bar.category.includes(value)) {
      newBarCategories = this.state.bar.category.concat(value);
    } else {
      newBarCategories = this.state.bar.category.filter(category => category !== value);
    }
    const bar = Object.assign({}, this.state.bar, {[name]: newBarCategories});
    console.log(newBarCategories);
    this.setState({ bar }, () => {
      console.log(this.state.bar);
    });
  }

  handleLocationChange = (name, address, location, website) => {
    const bar = Object.assign({}, this.state.bar, { name, address, location, website });
    this.setState({ bar });
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
        categories={this.state.categories}
        bar={this.state.bar}
        errors={this.state.errors}
      />
    );
  }

}

export default BarsEdit;
