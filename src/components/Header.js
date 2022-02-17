import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes
`
    0% {
        transform: scale(0);
        opacity:0;
    }
    25% {
        transform: scale(0.25);
        opacity:0.25;
    }
    50% {
        transform: scale(0.5); 
        opacity:0.5;
    }
    100% {
        transform: scale(1); 
        opacity:1;
    }
`   

const StyledHeader = styled.div
`
    background-color: #191919;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    font-size: 4em;
    color: white;

    animation: ${kf} 0.5s ease-in-out forwards;
`

export default function Header() {
    return (
        <StyledHeader>
            <div>A.P.O.D.</div>
        </StyledHeader>
    )
}