import styled from "styled-components";

const DayCardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 991px) {
    max-width: 20%;

    div {
      display: block;
    }
  }
`;

export default DayCardWrapper;