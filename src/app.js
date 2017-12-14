import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utilities/Routes';
import Navbar from './components/utilities/Navbar';
import ScrollToTop from './components/utilities/ScrollToTop';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <header>
              <Navbar />
            </header>
            <main>
              <Routes />
            </main>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
