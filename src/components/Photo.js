import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.div
`
    background-color: ${props => props.theme.primaryColor};
`

export default function Photo(props) {
    const { imageSrc } = props
    return (
        <StyledPhoto>
            <img src={imageSrc} alt="NASA" />
        </StyledPhoto>
    )
}