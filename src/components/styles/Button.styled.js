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
    font-size: 0.7em;

    &:active {
        transform: scale(0.97);
    }
`
}

${props =>
props.started &&
css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    border: none;
    border-radius: 50px;
    background-color: hsl(322, 100%, 66%);
    color: white;
    font-weight: bold;
    padding: 10px 20px;

    p {
        padding: 0;
    }
`
}

`
