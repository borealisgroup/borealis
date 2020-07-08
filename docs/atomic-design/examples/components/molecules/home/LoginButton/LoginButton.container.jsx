import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { LoginButton } from './LoginButton';
// import loggedIn selector from the store
// import loginSubmit action from the store

export const LoginButtonContainer = ({ onLoginSubmit, ...props }) => {
  const onClick = () => {
    onLoginSubmit();
  };

  return <LoginButton {...props} onClick={onClick} />;
};

const mapStateToProps = () =>
  createStructuredSelector({
    loggedIn: getLoggedIn,
  });

const mapDispatchToProps = dispatch => ({
  onLoginSubmit: () => dispatch(loginSubmit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonContainer);
