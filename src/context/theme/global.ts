import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        background:${props => props.theme.colors.primary};
        font-size:14px;
        color:${props=>props.theme.colors.second};
    }
`;