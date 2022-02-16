import React from 'react';

export default function Info(props) {
    const { date } = props
    return (
        <div>
            <div>Picture from { date }</div>
        </div>
    )
}