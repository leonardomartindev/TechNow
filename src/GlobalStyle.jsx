import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "arial", sans-serif;
        overflow-x:hidden;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    a{
        text-decoration:none;
        color: inherit;
    }
    h1, h1{
        font-family: 'Lato', sans-serif;
    }
    p{
        font-family: 'Open Sans', sans-serif;
    }
`