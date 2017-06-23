import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generatePayslip } from './actionCreators.js';

class Payslip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Ali',
      lastname: 'AliAliAli',
      annualSalary: 200000,
      superRate: 9
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePayslipSubmission = this.handlePayslipSubmission.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handlePayslipSubmission() {
    // Do some error handling
    if (false) return;

    this.props.handleGeneratePayslip(this.state);
    this.props.history.push('/payslip/confirm');
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">

          <div className="row">
            <div className="col-6">
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                  name="firstname"
                  placeholder="Firstname"
                />
              </div>
            </div>

            <div className="col-6">
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                  name="lastname"
                  placeholder="Lastname"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 input-group">
              <span className="input-group-addon"><i className="fa fa-usd" /></span>
              <input
                type="number"
                className="form-control"
                value={this.state.annualSalary}
                onChange={this.handleInputChange}
                name="annualSalary"
                placeholder="Annual salary"
              />
              <span className="input-group-addon">.00</span>
            </div>

            <div className="col-6 input-group">
              <div className="input-group-addon"><i className="fa fa-percent" /></div>
              <input
                type="number"
                className="form-control"
                value={this.state.superRate}
                onChange={this.handleInputChange}
                name="superRate"
                placeholder="Super rate"
              />
            </div>

          </div>

          <div className="form-group row justify-content-end">
            <button className="btn btn-primary" onClick={this.handlePayslipSubmission}>Generate Payslip</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  handleGeneratePayslip(payload) {
    dispatch(generatePayslip(payload));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Payslip);
