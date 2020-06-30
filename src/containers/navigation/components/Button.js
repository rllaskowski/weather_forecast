import React from "react";
import styled  from "styled-components";

const ButtonWrapper = styled.button`
    background-color: white;
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 12px;
`;

const Button = ({ text, onClick }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            {text}
        </ButtonWrapper>
    );
}

export default Button;
