import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button';
import { Label } from 'components/atoms/Label';

const LoginButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Label text="Log in" />
    </Button>
  );
};

LoginButton.propTypes = {};

export default LoginButton;
