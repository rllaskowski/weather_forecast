import React from "react";
import styled from "styled-components";

const SwitchWrapper = styled.input`

`;

const Switch = ({ isOn, onToggle }) => {
    return (
        <SwitchWrapper type={"checkbox"} onClick={onToggle}/>
    );
}

export default Switch
