import styled, {css} from "styled-components"

export const StyledButton = styled.button`


${props =>
props.footer &&
css`   
    background-color: white;
    color: hsl(322, 100%, 66%);
    border-radius: 20px;
    border: 1px solid hsl(322, 100%, 66%);
    padding: 5px 10px;
    box-shadow: 0px 0px 1em hsla(0, 100%, 1%, 0.1);
    
    &:active {
        transform: scale(0.97);
    }
`
}

`
