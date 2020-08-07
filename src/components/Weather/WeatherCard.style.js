import styled from "styled-components";
import { Link } from "react-router-dom";

const WeatherCardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-content: space-between;

  div {
    display: flex;
    align-items: center;
    text-align: center;
  }

  @media only screen and (min-width: 991px) {
    div {
      display: block;
      margin: 0 auto;
    }
  }
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
  align-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
      background-color: rgba(72,72,74,.01);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  &.active {
    background-color: rgba(72,72,74,.01);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

export default WeatherCardWrapper;
