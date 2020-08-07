import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: rgb(45, 52, 70);

  h1 {
    text-align: center;
    font-size: 32px;
    color: #fff;
    line-height: 32px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Weather App</h1>
    </HeaderWrapper>
  );
};

export default Header;
