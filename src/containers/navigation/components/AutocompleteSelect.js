import React, { useState } from "react";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";

const InputWrapper = styled.input`
    border-radius: 12px;
    padding: 10px 20px;
    outline: none;
    border: transparent;
    background-color: #F6F8FA;
`;

const AutocompleteSelect = ({onSelect, itemList}) => {
    const [value, setValue] = useState("");

    return (
        <Autocomplete
            getItemValue={item => item.value}
            items={itemList}
            renderItem={(item, isHighlighted) =>
                <div key={item.value}>
                    {item.value}
                </div>
            }
            renderInput={(props) => (
                <InputWrapper
                    {...props}
                />)

            }
            value={value}
            onSelect={(val) => {
                setValue(val);
                onSelect(val)
            }}
            onChange={e => setValue(e.target.value)}
            shouldItemRender={(item, value) => item.value.toLowerCase().startsWith(value)}
        />

    );
}

export default AutocompleteSelect;
