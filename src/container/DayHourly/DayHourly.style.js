import styled from "styled-components";

const DayWraper = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  font-size: 13px;
  color: rgb(197, 197, 197);
  -webkit-box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  padding: 15px 20px 30px 40px;
  transition: all 0.2s ease 0s;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 auto;

  @media only screen and (min-width: 991px) {
    max-width: 800px;
    .Weather__Card {
      display: flex;
    }
  }
  .slick-next {
    right: 0;
  }
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
`;

export default DayWraper;
