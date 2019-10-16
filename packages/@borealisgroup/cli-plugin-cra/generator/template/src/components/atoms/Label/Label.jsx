import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span``;

const Label = ({ text }) => <StyledLabel>{text}</StyledLabel>;

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
