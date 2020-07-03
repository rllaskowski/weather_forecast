import React from "react";
import styled  from "styled-components";
import { theme } from "styled-tools";

const ButtonWrapper = styled.button`
    border-radius: 30px;
    font-weight: 600;
    border: 1px solid transparent;
    background-color: ${theme('colors.primary')};
    color: white;
    &:hover {
        transition: background-color 200ms ease-in;
    }
    
    &:active {
        transform: translate(1px, 1px);
    }
    
    &:disabled {
        background-color: #CCCCCC;
    }
    &:focus {
        outline: none;
    }
    
    padding: 10px 20px;
`;

const Button = ({text, onClick, disabled=false}) => {
    return (
        <ButtonWrapper
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </ButtonWrapper>
    );
}

export default Button;
