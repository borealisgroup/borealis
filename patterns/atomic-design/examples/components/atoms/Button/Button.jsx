import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;

  :hover,
  :active {
    background-color: #fff;
    color: #000;
  }
`;

const Button = ({ children, ...props }) => (
  <StyledButton type="button">{children}</StyledButton>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
