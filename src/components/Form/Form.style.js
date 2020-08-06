import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
  position: relative;
  margin: 50px auto;
  transition: all 0.8s ease 0.5s;

  @media only screen and (min-width: 991px) {
    max-width: 600px;
  }

  input {
    width: 100%;
    background-color: rgb(255, 255, 255);
    font-size: 18px;
    color: rgb(197, 197, 197);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 15px 20px 15px 45px;
    transition: all 0.2s ease 0s;
    border-radius: 30px;
    box-sizing: border-box;
    &:focus {
      color: rgb(25, 25, 25);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      outline: none;
      outline-offset: 0px;
    }
    &.button {
      width: 200px;
      text-align: center;
      background-color: rgb(114, 102, 186);
      color: white;
      right: 0;
      position: absolute;
      padding: 15px 0;
      border-radius: 0px 30px 30px 0px;
      cursor: pointer;
    }
  }
`;

export default FormWrapper;
