import React, { Component } from 'react';
import { connect } from 'react-redux';
import { creatreNewPayslip } from './actionCreators.js';

class PayslipConfirm extends Component {
  constructor(props) {
    super(props);
    this.handlePayslipSubmission = this.handlePayslipSubmission.bind(this);
  }
  componentDidMount() {}

  handlePayslipSubmission() {
    const { payslip, user } = this.props;
    this.props.handleGeneratePayslip({ payslip, user });
    this.props.history.push('/payslip/result');
  }

  render() {
    const {
      payDate,
      payFrequency,
      annualIncome,
      grossIncome,
      incomeTax,
      netIncome,
      superRate,
      pay
    } = this.props.payslip;
    console.log(this.props);
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Payslip</h1>
          <h3>firstname lastname</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">pay date</th>
                <td>{payDate}</td>
              </tr>
              <tr>
                <th scope="row">Pay Frequency</th>
                <td>{payFrequency}</td>
              </tr>
              <tr>
                <th scope="row">Annual Income</th>
                <td>{annualIncome}</td>
              </tr>
              <tr>
                <th scope="row">Gross Income</th>
                <td>{grossIncome}</td>
              </tr>
              <tr>
                <th scope="row">Income Tax</th>
                <td>{incomeTax}</td>
              </tr>
              <tr>
                <th scope="row">Net Income</th>
                <td>{netIncome}</td>
              </tr>
              <tr>
                <th scope="row">Super</th>
                <td>{superRate}</td>
              </tr>
              <tr>
                <th scope="row">Pay</th>
                <td>{pay}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p />
          </div>
          <div>{this.props.user.session}</div>
          <div className="form-group row justify-content-end">
            <button className="btn btn-primary" onClick={this.handlePayslipSubmission}>Pay</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payslip: state.payslip,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleGeneratePayslip(payload) {
    dispatch(creatreNewPayslip(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PayslipConfirm);
