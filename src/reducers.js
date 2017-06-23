import { GENERATE_PAYSLIP, ADD_LOGIN_CREDENTIALS, ADD_STATUS_OF_CREATED_PAYSLIP, ADD_PREV_PAYSLIPS } from './actions';
import { generatePayslip } from './helpers';

const DEFAULT_STATE = {
  user: {},
  payslip: {},
  status: {},
  prevPayslips: []
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GENERATE_PAYSLIP:
      return Object.assign({}, state, { payslip: generatePayslip(action.payload) });
    case ADD_LOGIN_CREDENTIALS:
      console.log('action.payload', action.payload);
      return Object.assign({}, state, { user: action.payload });
    case ADD_STATUS_OF_CREATED_PAYSLIP:
      console.log('action.payload in ADD_STATUS_OF_CREATED_PAYSLIP', action.payload);
      return Object.assign({}, state, { status: action.payload });
    case ADD_PREV_PAYSLIPS:
      console.log('response in reducer', action.payload);
      return Object.assign({}, state, { prevPayslips: action.payload });
    default:
      return state;
  }
};

export default rootReducer;
