import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import BarsForm from './BarsForm';

class BarsNew extends React.Component {

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
      rating: ''
    },
    categories: ['Fun with Friends', 'Date Night', 'Family Meal', 'Light Bite', 'Experimental'],
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const bar = Object.assign({}, this.state.bar, {[name]: value});
    this.setState({ bar });
  }

  handleLocationChange = (name, address, location, website) => {
    const bar = Object.assign({}, this.state.bar, { name, address, location, website });
    this.setState({ bar });
  }

  handleMultipleInput = ({ target: { name, value } }) => {
    let newBarCategories;
    if (!this.state.bar.category.includes(value)) {
      newBarCategories = this.state.bar.category.concat(value);
    } else {
      newBarCategories = this.state.bar.category.filter(category => category !== value);
    }
    const bar = Object.assign({}, this.state.bar, {[name]: newBarCategories});
    this.setState({ bar });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/bars', this.state.bar, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/bars'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <BarsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLocationChange={this.handleLocationChange}
        bar={this.state.bar}
        errors={this.state.errors}
        handleMultipleInput={this.handleMultipleInput}
        categories={this.state.categories}
      />
    );
  }

}

export default BarsNew;
