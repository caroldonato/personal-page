import styled, { keyframes } from "styled-components";

export const BadgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 0.8rem;
    word-break: break-word;

    pointer-event: none;
`;

export const BadgeIcon = styled.div`
    font-size: 10vw;

    @media (min-width: 375px) {
        font-size: 38px;
    }

    @media (min-width: 640px) {
        font-size: 48px;
    }
`;