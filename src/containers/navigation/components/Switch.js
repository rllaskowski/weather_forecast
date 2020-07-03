import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

const LabelWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top:0px;
    input:checked + span {
        background-color: ${theme('colors.primary')};
    }
    input:focus + span {
        box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + span:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;

const InputWrapper = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const SpanWrapper = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    border-radius: 34px;
    &:before {
        border-radius: 50%;
    }
`;

const Switch = ({isOn, onToggle}) => {
    return (
        <LabelWrapper>
            <InputWrapper
                type={"checkbox"}
                checked={isOn}
                onChange={onToggle}
            />
            <SpanWrapper/>
        </LabelWrapper>
    );
}

export default Switch
