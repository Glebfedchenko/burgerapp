import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/index';
import BurgerBuilder from './Burger/BurgerBuilder';
import history from '../redux/store/history';
import store from '../redux/store/store';
import Checkout from './Checkout';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
export default App;
