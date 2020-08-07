import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    font-family: "Open Sans", sans-serif;
   
    color: #4a4a4a;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Open Sans", sans-serif;
    font-size:13px;
    
    background-color: #fafbfe;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  
  main{
    padding: 0 15px;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }

}

`;

export default GlobalStyle;
