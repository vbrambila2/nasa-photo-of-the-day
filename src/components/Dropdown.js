import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.white};
    padding: 1em 0em;
`

export default function Dropdown(props) {
    const { dateChange } = props;
    return (
        <StyledDropdown>
            <form>
                Month: <input type="number" min="1" max="12" ></input>
                Day: <input type="number" min="1" max="31" ></input>
                Year: <input type="number" min="1980" max="2022" ></input>
                <button onSubmit={dateChange}>Change Date</button>
            </form>
        </StyledDropdown>
        
    )
}