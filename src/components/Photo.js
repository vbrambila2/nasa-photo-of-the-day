import React from 'react';

export default function Photo(props) {
    const { imageSrc } = props
    return (
        <div>
            <img src={imageSrc} alt="NASA" />
        </div>
    )
}