import React, { Component } from 'react';
import { connect } from 'react-redux';

class PayslipResult extends Component {
  render() {
    return (
      <div>
        <p>{this.props.status.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status
});

export default connect(mapStateToProps)(PayslipResult);
