import styled, { keyframes } from "styled-components";

const rainbowShadow = keyframes`
    0% {
        box-shadow: 0px 0px 20px #ff008d;
        border-bottom: 2px solid #ff008d;
    }
    10% {
        box-shadow: 0px 0px 20px #ff0026;
        border-bottom: 2px solid #ff0026;
    }
    20% {
        box-shadow: 0px 0px 20px #ff5e00;
        border-bottom: 2px solid #ff5e00;
    }
    30% {
        box-shadow: 0px 0px 20px #ffbb00;
        border-bottom: 2px solid #ffbb00;
    }
    40% {
        box-shadow: 0px 0px 20px #e5ff00;
        border-bottom: 2px solid #e5ff00;
    }
    50% {
        box-shadow: 0px 0px 20px #2fff00;
        border-bottom: 2px solid #2fff00;
    }
    60% {
        box-shadow: 0px 0px 20px #00ffa2;
        border-bottom: 2px solid #00ffa2;
    }
    70% {
        box-shadow: 0px 0px 20px #00eeff;
        border-bottom: 2px solid #00eeff;
    }
    80% {
        box-shadow: 0px 0px 20px #0080ff;
        border-bottom: 2px solid #0080ff;
    }
    90% {
        box-shadow: 0px 0px 20px #9900ff;
        border-bottom: 2px solid #9900ff;
    }
    100% {
        box-shadow: 0px 0px 20px #ff008d;
        border-bottom: 2px solid #ff008d;
    }
`

export const StyledNav = styled.nav`
    z-index: 10;
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #2e2e2e;
    padding: 10px 20px 10px 20px;
    border-bottom: 2px solid rgb(218, 14, 255, 0.75);
    box-shadow: 0px 0px 20px #ff008d;
    animation: ${rainbowShadow} 20s linear infinite;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledNavMobile = styled.nav`
    z-index: 10;
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-color: #2e2e2e;
    padding: 10px;
    border-bottom: 2px solid rgb(218, 14, 255, 0.75);
    box-shadow: 0px 0px 20px #ff008d;
    animation: ${rainbowShadow} 20s linear infinite;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const NavLink = styled.li`
    font-family: "Press Start 2P";
    text-transform: uppercase;
    list-style: none;
    display: none;

    @media (min-width: 640px) {
        display: block;
    }
`;

export const NavLinkMobile = styled.li`
    display: flex;
    font-family: "Press Start 2P";
    text-transform: uppercase;
    list-style: none;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const linkStyle = {
    color: "white",
    textDecoration: "none"
}

export const NavMobileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: fit-content;

    background: #2e2e2e;
    padding: 10px;
`;