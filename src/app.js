import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.css';

class App extends React.Component {

  render() {
    return (
      <h1>The Social Atlas</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
