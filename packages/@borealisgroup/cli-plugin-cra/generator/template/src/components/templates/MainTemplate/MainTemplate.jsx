import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main``;
const HeaderWrapper = styled.div``;
const ContentWrapper = styled.div``;

const MainTemplate = ({ header, sidebar, content, ...props }) => (
  <Wrapper {...props}>
    <HeaderWrapper>{header}</HeaderWrapper>
    {sidebar}
    <ContentWrapper>{content}</ContentWrapper>
  </Wrapper>
);

MainTemplate.propTypes = {};

MainTemplate.defaultProps = {};

export default MainTemplate;
