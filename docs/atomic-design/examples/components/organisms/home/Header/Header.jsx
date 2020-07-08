import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LoginButton } from 'components/molecules/home/LoginButton';

const Wrapper = styled.header`
  display: flex;
  align-items: center;

  height: 65px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

const WrapperRight = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;

const MainHeader = ({ ...props }) => (
  <Wrapper {...props}>
    <Title>App</Title>

    <WrapperRight>
      <LoginButton />
    </WrapperRight>
  </Wrapper>
);

MainHeader.propTypes = {};

MainHeader.defaultProps = {};

export default MainHeader;
