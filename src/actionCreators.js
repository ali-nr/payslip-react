import { GENERATE_PAYSLIP, ADD_LOGIN_CREDENTIALS, ADD_STATUS_OF_CREATED_PAYSLIP, ADD_PREV_PAYSLIPS } from './actions';
import axios from 'axios';

export function generatePayslip(payload) {
  return { type: GENERATE_PAYSLIP, payload };
}

export function addLoginCredentials(userData) {
  return { type: ADD_LOGIN_CREDENTIALS, payload: userData };
}

export function addStatusOfCreatedPayslip(status) {
  return { type: ADD_STATUS_OF_CREATED_PAYSLIP, payload: status };
}

export function addPrevPayslips(prevPayslips) {
  return { type: ADD_PREV_PAYSLIPS, payload: prevPayslips };
}

export function getLoginCredentials(userData) {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/login',
      data: { user: userData.username, pass: userData.password },
      responseType: 'json',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => {
        console.log('response', response);
        response.data.username = userData.username;
        sessionStorage.setItem('username', response.data.username);
        sessionStorage.setItem('session', response.data.session);
        console.log('username', sessionStorage.getItem('session'));
        dispatch(addLoginCredentials(response.data));
      })
      .catch(error => {
        console.error('axios error', error);
      });
  };
}

export function creatreNewPayslip(payload) {
  console.log('payload in creatreNewPayslip', payload);
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/payslip',
      data: {
        first_name: payload.payslip.firstname,
        last_name: payload.payslip.lastname,
        pay_date_month: payload.payslip.payDate,
        pay_date_year: payload.payslip.payDate,
        pay_frequency: payload.payslip.payFrequency,
        annual_income: payload.payslip.annualIncome,
        gross_income: payload.payslip.grossIncome,
        income_tax: payload.payslip.incomeTax,
        netIncome: payload.payslip.netIncome,
        super: payload.payslip.superAnnuation,
        pay: payload.payslip.actualPay
      },
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'myob-user': payload.user.username,
        'myob-token': payload.user.session
      }
    })
      .then(response => {
        console.log('response', response);
        dispatch(addStatusOfCreatedPayslip(response.data));
      })
      .catch(error => {
        console.error('axios error', error);
      });
  };
}

export function refreshPrevPayslips(userData) {
  console.log('userData', userData);
  return dispatch => {
    axios({
      url: 'http://localhost:8080/api/payslips',
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'myob-user': userData.user,
        'myob-token': userData.session
      }
    }).then(response => {
      console.log('response for prev payslips', response);

      dispatch(addPrevPayslips(response.data));
    });
  };
}
