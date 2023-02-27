import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600&display=swap');

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
   --color-grey-2 : #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-success: #3FE864;
    --color-negative: #E83F5B;
    }


  body {
    background-color:var(--color-grey-4);
  }

  * {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

h5{
  font-size:20px;
  color: var(--color-grey-0);
  text-align:center;
  margin-top:20%;
}

    

    button{
        cursor: pointer;
    }
  }

`;
export default GlobalStyle;
