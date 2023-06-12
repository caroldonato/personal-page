import styled from "styled-components";

export const CollapsibleWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 641px) {
        max-width: 640px;
    }

    & .header {
        width: 100%;
        background-color: rgb(46, 46, 46);
        padding: 6px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    & .content {
        padding: 6px;
        background-color: rgb(36, 36, 36) !important;
    }

    & ul li {
        list-style: none;
        margin-bottom: 1.5rem;

        &::before {
            content: "◽ ";
        }
    }
`