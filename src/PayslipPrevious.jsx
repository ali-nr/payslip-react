import React, { Component } from 'react';
import { connect } from 'react-redux';
import { refreshPrevPayslips } from './actionCreators.js';

class PayslipPrevious extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevPayslisps: []
    };
  }
  componentDidMount() {
    console.log('component did mount ');
    const userData = {
      user: sessionStorage.getItem('username'),
      session: sessionStorage.getItem('session')
    };
    console.log('props', this.props);
    this.props.handleRefresh(userData);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps'), nextProps;
    this.setState({
      prevPayslisps: nextProps.prevPayslips
    });
  }
  render() {
    if (this.state.prevPayslisps.length > 0) {
      let prevPayslips = this.state.prevPayslisps.map(payslip => {
        return (
          <tr>
            <th scope="row">First name:</th>
            <td>{payslip.first_name}</td>
            <th scope="row">Last name:</th>
            <td>{payslip.last_name}</td>
            <th scope="row">Annual income:</th>
            <td>{payslip.annual_income}</td>
            <th scope="row">Gross income:</th>
            <td>{payslip.gross_incom}e</td>
            <th scope="row">income tax:</th>
            <td>{payslip.income_tax}</td>
            <th scope="row">Net income:</th>
            <td>{payslip.net_income}</td>
            <th scope="row">Super:</th>
            <td>{payslip.super}</td>
            <th scope="row">Pay:</th>
            <td>{payslip.pay}</td>
          </tr>
        );
      });

      return (
        <div>
          <table className="table table-striped">
            <tbody>
              {prevPayslips}
            </tbody>
          </table>
        </div>
      );
    }
    console.log(this.props);
    return <div>Loading...</div>;
  }
}
const mapStateToProps = state => ({
  user: state.user,
  prevPayslips: state.prevPayslips
});

const mapDispatchToProps = dispatch => ({
  handleRefresh(userData) {
    dispatch(refreshPrevPayslips(userData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PayslipPrevious);
