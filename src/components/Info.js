import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.white};
    padding: 1em 0em;
    font-size: 1.5em;
`

export default function Info(props) {
    const { date } = props
    return (
        <StyledInfo>
            <div>Picture from: { date }</div>
        </StyledInfo>
    )
}