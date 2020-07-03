import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const LoaderWrapper = styled.div`
`;

const FetchingLoader = () => {
    return (
        <LoaderWrapper>
            <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}

            />

        </LoaderWrapper>
    );
}

export default FetchingLoader;
