import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}

body{
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

    }

button, a {
    cursor: pointer;
    text-decoration: none;
}

`