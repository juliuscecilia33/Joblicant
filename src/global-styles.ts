import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        color: #000000;
        background-color: #FFFFFF;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        overflow-y: visible;

        &::-webkit-scrollbar {
            width: 10px;
            background-color: #F6F6F2;

            border-radius: 15px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #c4c4c4;
            border-radius: 15px;
        }
    }

    ul {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    h1, h2, h3, p {
        margin: 0;
        padding: 0;
    }

    a {
        border: none;
        background: none;
        outline: none;
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: none;
        color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            text-decoration: none;
        }
    }

    button {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
    }
`;
