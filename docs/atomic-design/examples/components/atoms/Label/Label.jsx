import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  font-size: 14px;
`;

const Label = ({ text }) => <StyledLabel>{text}</StyledLabel>;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
