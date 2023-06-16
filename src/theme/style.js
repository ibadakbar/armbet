import { createGlobalStyle } from "styled-components";
import theme from "./index";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        font-family:'${theme.fontFamily + " Medium"}';
    }

    h1,h2,h3,h4,h5 {
        color: ${theme.colors.title};
        font-family:'${theme.fontFamily + " Black"}';
        line-height: ${theme.fontLineHeight};
        margin-top: 0;
    }

    h1 {
        font-size: ${theme.fontSizes[6]};
    }

    h2 {
        font-size: ${theme.fontSizes[4]};
    }

    h3 {
        font-size: ${theme.fontSizes[3]};
    }

    h4 {
        font-size: ${theme.fontSizes[2]};
    }

    h5 {
        font-size: ${theme.fontSizes[1]};
    }

    table {
        border: none;
        border-collapse: collapse;
    }
    
    table td {
        border: none;
        padding: 5px;
    }

    p {
        margin-bottom: 0;
        color: ${theme.colors.color2ShadeUp[4]};
        line-height: ${theme.fontLineHeight};
        font-size: ${theme.fontSizes[0]};
    }

    img {
        margin-bottom: 0;
    }

    button,input {
        outline: none;
        border: none;
        font-size: ${theme.fontSizes[0]};
    }

    li {
        color: ${theme.colors.color2ShadeUp[4]};
        font-size: ${theme.fontSizes[0]};
    }

    input, label {
        display:block;
    }

    label {
        font-size: ${theme.fontSizes[0]};
    }

    button {
        font-family:'${theme.fontFamily + " Bold"}';
        color: ${theme.colors.text};
    }

    input {
        font-family:'${theme.fontFamily + " Medium"}';
        -webkit-appearance: none;
    }

    ::placeholder { 
        color: ${theme.inputs.placeholderColor};
    }


    a {
        text-decoration: none;
        color: ${theme.colors.color1};
    }

    a:hover {
        text-decoration: none;
    }

    .hover-color-1:hover {
        color: ${theme.colors.color1};
    }
    
    .bg-1 {
        background-color: ${theme.colors.color1}
    }

    .bg-2 {
        background-color: ${theme.colors.color2}
    }

    .bg-3 {
        background-color: ${theme.colors.color3}
    }

    .bg-4 {
        background-color: ${theme.colors.color4}
    }

    .bg-5 {
        background-color: ${theme.colors.color5}
    }

    .hero-text-container {
        margin-top: 15vh;
    }



    @media screen and (max-width: 1020px) {
        .hero-text-container {
            margin-top: 15vh;
        }
        h1 {
            font-size: ${theme.fontSizes[5]} !important;
        }
    
        h2 {
            font-size: ${theme.fontSizes[3]};
        }
    
        h3 {
            font-size: ${theme.fontSizes[2]};
        }
    
        h4 {
            font-size: ${theme.fontSizes[1]};
        }
    
        h5 {
            font-size: ${theme.fontSizes[0]};
        }
    
        p {
            font-size: ${theme.fontSizes[0]};
        }

        button {
            font-size: ${theme.fontSizes[0]};
        }
    }

    @media screen and (max-width: 768px) {
        .hero-text-container {
            margin-top: 10vh;
        }
        h1 {
            font-size: ${theme.mobileFontSizes[5]} !important;
        }
    
        h2 {
            font-size: ${theme.mobileFontSizes[4]};
        }
    
        h3 {
            font-size: ${theme.mobileFontSizes[3]};
        }
    
        h4 {
            font-size: ${theme.mobileFontSizes[2]};
        }
    
        h5 {
            font-size: ${theme.mobileFontSizes[1]};
        }

        button {
            min-width: auto !important;
        }
    }



`;

export default GlobalStyle;
