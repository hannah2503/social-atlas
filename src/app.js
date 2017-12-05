import React from 'react';
import ReactDOM from 'react-dom';


import BarsIndex from '../src/components/bars/BarsIndex';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BarsIndex />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
