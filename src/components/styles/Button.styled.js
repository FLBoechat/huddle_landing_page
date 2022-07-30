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
    
`
}

`
