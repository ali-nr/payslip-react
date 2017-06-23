import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Login';
import Payslip from './Payslip';
import PayslipConfirm from './PayslipConfirm';
import PayslipResult from './PayslipResult';
import PayslipPrevious from './PayslipPrevious';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/payslip/entry" component={Payslip} />
          <Route exact path="/payslip/confirm" component={PayslipConfirm} />
          <Route exact path="/payslip/result" component={PayslipResult} />
          <Route exact path="/payslip/previous" component={PayslipPrevious} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>;

export default App;
