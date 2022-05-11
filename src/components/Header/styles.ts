import styled from "styled-components";

export const Container = styled.header `
    background-color: var(--blue);
    color: #f0f2f5;
`

export const Content = styled.div `
    max-width: 900px;
    margin: 0 auto;

    padding: 2rem 2rem 4rem;

    h1 {
        text-transform: uppercase;
    }

    p {
        padding-left: 1rem;
    }

    input {
        margin-top: 1rem;
        min-width: 300px;
        width: 100%;
        outline: none;

        padding: 0.5rem;
    }
`