import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { LoginButton } from 'components';
// import loggedIn selector from the store
// import loginSubmit action from the store

const makeMapStateToProps = () =>
  createStructuredSelector({
    loggedIn: getLoggedIn,
  });

const mapDispatchToProps = {
  loginSubmit,
};

class LoginButtonContainer extends React.Component {
  onClick = () => {
    this.props.loginSubmit();
  };

  render() {
    return <LoginButton {...this.props} />;
  }
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(LoginButtonContainer);
