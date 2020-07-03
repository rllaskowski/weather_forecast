import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const LoaderWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FetchingLoader = () => {
    return (
        <LoaderWrapper>
            <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
            />

        </LoaderWrapper>
    );
}

export default FetchingLoader;
