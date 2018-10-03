import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import InputForm from './components/input-form';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/:filter?" component={InputForm} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
