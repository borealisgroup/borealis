import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = styled.div``;

const MainTemplate = ({ header, ...props }) => (
  <Wrapper {...props}>
    <Header>{header}</Header>
    {/* Sidebar */}
  </Wrapper>
);

MainTemplate.propTypes = {};

MainTemplate.defaultProps = {};

export default MainTemplate;
