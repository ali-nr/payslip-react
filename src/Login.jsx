import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoginCredentials } from './actionCreators.js';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: 'ali',
      password: 'aaaa'
    };
    this.goToPayslip = this.goToPayslip.bind(this);
    this.handleLoginSubmission = this.handleLoginSubmission.bind(this);
  }
  render() {
    return (
      <div className="col-6">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Sign In</div>
          </div>
          <div className="panel-body">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user" /></span>
              <input type="text" className="form-control" name="username" placeholder="username or email" />
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock" /></span>
              <input type="password" className="form-control" name="password" placeholder="password" />
            </div>
            <div className="form-group">

              <div className="col-sm-12 controls">
                <button className="btn btn-success" onClick={this.handleLoginSubmission}>Login </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleLoginSubmission() {
    this.props.handleLoginCredentials(this.state);
    this.props.history.push('/payslip/entry');
  }

  goToPayslip(event) {
    event.preventDefault();
    this.props.history.push('/payslip/entry');
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoginCredentials(payload) {
    dispatch(getLoginCredentials(payload));
  }
});

export default connect(null, mapDispatchToProps)(Login);
