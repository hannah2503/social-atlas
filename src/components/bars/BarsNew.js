import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import BarsForm from './BarsForm';

const category = [];

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
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const bar = Object.assign({}, this.state.bar, {[name]: value});
    this.setState({ bar });
  }

  handleLocationChange = (name, address, location, website) => {
    console.log('location changed!', name, address, location, website);
    const bar = Object.assign({}, this.state.bar, { name, address, location, website });
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('new submit was hit!', this);

    Axios
      .post('/api/bars', this.state.bar, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/bars'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    console.log(this);
    return (
      <BarsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLocationChange={this.handleLocationChange}
        bar={this.state.bar}
        errors={this.state.errors}
        handleMultipleInput={this.handleMultipleInput}
      />
    );
  }

}

export default BarsNew;
