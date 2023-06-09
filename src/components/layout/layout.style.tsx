import styled, { keyframes } from "styled-components";

export const PageContainer = styled.main`
    font-family: "Lexend Deca";
    font-weight: 100;
    background-color: #2e2e2e;
    color: white;
`;

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: "Press Start 2P";
    pointer-events: none;
    color: white;
`;

export const SectionTitle = styled.h2`
    font-family: "Press Start 2P";
    pointer-events: none;
    color: white;
    margin-bottom: 1em;
`;

const rainbowShadow = keyframes`
    0% {
        filter: drop-shadow(0px 0px 3px #ff008d);
    }
    10% {
        filter: drop-shadow(0px 0px 3px #ff0026);
    }
    20% {
        filter: drop-shadow(0px 0px 3px #ff5e00);
    }
    30% {
        filter: drop-shadow(0px 0px 3px #ffbb00);
    }
    40% {
        filter: drop-shadow(0px 0px 3px #e5ff00);
    }
    50% {
        filter: drop-shadow(0px 0px 3px #2fff00);
    }
    60% {
        filter: drop-shadow(0px 0px 3px #00ffa2);
    }
    70% {
        filter: drop-shadow(0px 0px 3px #00eeff);
    }
    80% {
        filter: drop-shadow(0px 0px 3px #0080ff);
    }
    90% {
        filter: drop-shadow(0px 0px 3px #9900ff);
    }
    100% {
        filter: drop-shadow(0px 0px 3px #ff008d);
    }
`

const rainbowPhotoFrame = keyframes`
    0% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #ff008d,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #ff008d,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #ff008d,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #ff008d,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #ff008d,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #ff008d;
    }
    10% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #ff0026,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #ff0026,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #ff0026,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #ff0026,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #ff0026,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #ff0026;
    }
    20% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #ff5e00,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #ff5e00,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #ff5e00,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #ff5e00,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #ff5e00,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #ff5e00;
    }
    30% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #ffbb00,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #ffbb00,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #ffbb00,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #ffbb00,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #ffbb00,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #ffbb00;
    }
    40% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #e5ff00,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #e5ff00,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #e5ff00,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #e5ff00,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #e5ff00,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #e5ff00;
    }
    50% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #2fff00,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #2fff00,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #2fff00,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #2fff00,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #2fff00,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #2fff00;
    }
    60% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #00ffa2,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #00ffa2,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #00ffa2,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #00ffa2,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #00ffa2,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #00ffa2;
    }
    70% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #00eeff,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #00eeff,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #00eeff,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #00eeff,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #00eeff,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #00eeff;
    }
    80% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #0080ff,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #0080ff,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #0080ff,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #0080ff,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #0080ff,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #0080ff;
    }
    90% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #9900ff,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #9900ff,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #9900ff,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #9900ff,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #9900ff,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #9900ff;
    }
    100% {
        box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
        10px 0px 0px 0px #ff008d,
        -5px 0px 0px 0px  rgba(24, 24, 27, 1),
        -10px 0px 0px 0px #ff008d,
        0px 5px 0px 0px  rgba(24, 24, 27, 1),
        0px 10px 0px 0px #ff008d,
        0px -5px 0px 0px  rgba(24, 24, 27, 1),
        0px -10px 0px 0px #ff008d,
        5px 5px 0px 0px  rgba(24, 24, 27, 1),
        10px 10px 0px 0px #ff008d,
        5px -5px 0px 0px  rgba(24, 24, 27, 1),
        10px -10px 0px 0px #ff008d;
    }
`;

export const FramedPhoto = styled.div`
    filter: drop-shadow(0px 0px 3px #fff);
    animation: ${rainbowShadow} 20s linear infinite;
`;

// BOX-SHADOW:
// LEFT - RIGHT - BOTTOM - TOP - LEFT FILL BOTTOM - LEFT FILL TOP
export const PhotoFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 5px 0px 0px 0px rgba(24, 24, 27, 1),
                10px 0px 0px 0px #ff008d,
                -5px 0px 0px 0px  rgba(24, 24, 27, 1),
                -10px 0px 0px 0px #ff008d,
                0px 5px 0px 0px  rgba(24, 24, 27, 1),
                0px 10px 0px 0px #ff008d,
                0px -5px 0px 0px  rgba(24, 24, 27, 1),
                0px -10px 0px 0px #ff008d,
                5px 5px 0px 0px  rgba(24, 24, 27, 1),
                10px 10px 0px 0px #ff008d,
                5px -5px 0px 0px  rgba(24, 24, 27, 1),
                10px -10px 0px 0px #ff008d;

    animation: ${rainbowPhotoFrame} 20s linear infinite;
`;

export const SectionDivider = styled.div`
    height: 0.5vh;
    background: rgb(255,0,141);
    background: linear-gradient(90deg, 
        rgba(255,0,141,1) 9%, 
        rgba(255,0,38,1) 9%, 
        rgba(255,0,38,1) 18%, 
        rgba(255,94,0,1) 18%, 
        rgba(255,94,0,1) 27%, 
        rgba(255,187,0,1) 27%, 
        rgba(255,187,0,1) 36%, 
        rgba(229,255,0,1) 36%, 
        rgba(229,255,0,1) 45%, 
        rgba(47,255,0,1) 45%, 
        rgba(47,255,0,1) 54%, 
        rgba(0,255,162,1) 54%, 
        rgba(0,255,162,1) 63%, 
        rgba(0,238,255,1) 63%, 
        rgba(0,238,255,1) 72%, 
        rgba(0,128,255,1) 72%, 
        rgba(0,128,255,1) 81%, 
        rgba(153,0,255,1) 81%, 
        rgba(153,0,255,1) 90%, 
        rgba(255,0,141,1) 90%);
`;

export const SectionDividerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SectionDivider_proto = styled.div`
    width: 50%;
    height: 5vh;
    background: rgb(255,0,141);
    background: linear-gradient(0deg, rgba(255,0,141,1) 9%, rgba(255,0,38,1) 9%, rgba(255,0,38,1) 18%, rgba(255,94,0,1) 18%, rgba(255,94,0,1) 27%, rgba(255,187,0,1) 27%, rgba(255,187,0,1) 36%, rgba(229,255,0,1) 36%, rgba(229,255,0,1) 45%, rgba(47,255,0,1) 45%, rgba(47,255,0,1) 54%, rgba(0,255,162,1) 54%, rgba(0,255,162,1) 63%, rgba(0,238,255,1) 63%, rgba(0,238,255,1) 72%, rgba(0,128,255,1) 72%, rgba(0,128,255,1) 81%, rgba(153,0,255,1) 81%, rgba(153,0,255,1) 90%, rgba(255,0,141,1) 90%);
`;

export const SectionDividerEndRight = styled.div`
    display: block;
    height: 6vh;
    background-color: rgba(10, 10, 10, 1);
    width: 3vw;

    &::after {
        display: block;
        content: ' ';
        width: 3vw;
        height: 2vh;
        background-color: red;
    }
`;

export const VerticalDivider = styled.div`
    height: 2px;
    width: 90vw;
    background-color: white;
    box-shadow: 0px 0px 10px 2px rgba(255,255,255,1);
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        width: 2px;
        height: 100%;
        margin-top: 0px;
        margin-bottom: 20px;
    }
`;

export const HorizontalDivider = styled.div`
    height: 2px;
    width: 90vw;
    background-color: white;
    box-shadow: 0px 0px 10px 2px rgba(255,255,255,1);
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const hoverableStyle = (isHovered:boolean, color?:string) => ({
    transition: "all 0.25s ease-in",
    boxShadow: isHovered ? `-5px 10px 0px rgba(30, 30, 30, 1),
                            5px 10px 0px rgba(30, 30, 30, 1),
                            5px 0px 0px rgba(30, 30, 30, 1),
                            -5px 0px 0px rgba(30, 30, 30, 1),
                            3px -3px 0px rgba(102, 102, 102, 1) inset,
                            -1px -3px 0px rgba(189, 189, 189, 0.9) inset,
                            0px 5px 20px 10px ${(color ?? "#fff")}`
                        :  `-5px 10px 0px rgba(30, 30, 30, 1),
                            5px 10px 0px rgba(30, 30, 30, 1),
                            5px 0px 0px rgba(30, 30, 30, 1),
                            -5px 0px 0px rgba(30, 30, 30, 1),
                            3px -3px 0px rgba(102, 102, 102, 1) inset,
                            -1px -3px 0px rgba(189, 189, 189, 0.9) inset`,
    scale: isHovered ? "0.9" : "1",
    transform: isHovered ? "translateY(2px)" : "translateY(0px)"
});

export const HoverableButton = styled.a`
    transition: all 0.25s ease-in;
    padding: 20px;
    min-width: fit-content;

    box-shadow: -5px 10px 0px rgba(30, 30, 30, 1),
                5px 10px 0px rgba(30, 30, 30, 1),
                5px 0px 0px rgba(30, 30, 30, 1),
                -5px 0px 0px rgba(30, 30, 30, 1),
                0px 2px 0px rgba(60, 60, 60, 1) inset,
                3px -3px 0px rgba(102, 102, 102, 1) inset,
                -1px -3px 0px rgba(189, 189, 189, 0.9) inset;
    scale: 1;
    transform: translateY(0px);

    &:hover {
        box-shadow: -5px 10px 0px rgba(30, 30, 30, 1),
                    5px 10px 0px rgba(30, 30, 30, 1),
                    5px 0px 0px rgba(30, 30, 30, 1),
                    -5px 0px 0px rgba(30, 30, 30, 1),
                    3px -3px 0px rgba(102, 102, 102, 1) inset,
                    -1px -3px 0px rgba(189, 189, 189, 0.9) inset,
                    0px 5px 20px 10px #fff;

        scale: 0.9;
        transform: translateY(2px);
    }
`;