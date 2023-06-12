import styled from 'styled-components';

export const TimelineStem = styled.div`
    position: relative;
    max-width: 640px;
    
    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;

        background-color: transparent;
        border-width: 0px 1px 0px 1px;
        border-color: transparent white transparent white;
        width: 5px;
        content: '';
    }
`;

export const TimelineBubble = styled.div`
    padding: 10px 25px;
    position: relative;
    width: 50%;

    &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -15px;

        background-color: rgb(255, 0, 141);
        border: 5px solid rgb(24, 24, 27);
        top: 16px;
        border-radius: 50%;
        z-index: 1;
    }

    &.left {
        left: 0;

        &::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            right: 15px;
            border: medium solid rgb(46, 46, 46);
            border-width: 8px 0 8px 10px;
            border-color: transparent transparent transparent rgb(46, 46, 46);
        }
    }

    &.right {
        left: 50%;

        &::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 22px;
            width: 0;
            z-index: 1;
            left: 15px;
            border: medium solid rgb(46, 46, 46);
            border-width: 8px 10px 8px 0;
            border-color: transparent rgb(46, 46, 46) transparent transparent;
        }

        &::after {
            left: -10px;
        }
    }
`;

export const TimelineBubbleContent = styled.div`
    padding: 20px;
    background-color: rgb(46, 46, 46);
    color: white;
    position: relative;
    border-radius: 6px;
`;

