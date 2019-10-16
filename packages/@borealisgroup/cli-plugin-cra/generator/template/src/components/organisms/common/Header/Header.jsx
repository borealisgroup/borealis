import React from 'react';
import styled from 'styled-components';
// import { LoginButton } from 'components/molecules/home/LoginButton';

const Wrapper = styled.header``;

const MainHeader = ({ ...props }) => (
  <Wrapper {...props}>{/* <Title>App</Title> */}</Wrapper>
);

MainHeader.propTypes = {};

MainHeader.defaultProps = {};

export default MainHeader;
