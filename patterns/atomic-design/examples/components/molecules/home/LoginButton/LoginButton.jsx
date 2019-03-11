import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'components';

const LoginButton = { onClick, ...props } => {
  return (
    <Button onClick={onClick}>
      <Label text="Log in" />
    </Button>
  );
};

LoginButton.propTypes = {
};

export default LoginButton;
