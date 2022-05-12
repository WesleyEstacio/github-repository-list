import styled from "styled-components";

export const Container = styled.section `
    padding: 1rem 4rem;

    strong {
        text-transform: uppercase;
    }

    input {
        outline: none;
        border: 1px solid var(--blue);
        padding: 0.75rem 1rem;
        background-color: transparent;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            background-color: var(--blue);
            color: #f0f2f5;
            filter: brightness(0.9);
        }
    }

    h2 {
            color: var(--blue);
            text-transform: uppercase;
            padding: 1rem 0;
            overflow-wrap: break-word;
        }

    ul {
        list-style-type: none;

        p {
            padding: 0.5rem 0;
        }
    }
`
