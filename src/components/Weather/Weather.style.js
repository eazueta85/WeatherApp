import styled from "styled-components";

const WeatterWraper = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  font-size: 13px;
  color: rgb(197, 197, 197);
  -webkit-box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  padding: 15px 20px 15px 45px;
  transition: all 0.2s ease 0s;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 50px auto;

  .Weatter__Box {
    display: block;

    h1 {
      margin-bottom: 0;
      font-size: 22px;
    }

    .Weatter__Info {
      display: flex;
      align-items: center;
      margin-top: 20px;

      .temp {
        font-size: 48px;
      }
    }
    .Temp__Min__Max {
      font-size: 18px;
      padding-left: 20px;
    }
  }

  .Weather__Card {
    display: block;
  }

  @media only screen and (min-width: 991px) {
    max-width: 800px;
    .Weather__Card {
      display: flex;
    }
  }
`;

export default WeatterWraper;
