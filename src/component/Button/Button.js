import React from 'react';
import './index.css';

function Button({onClick}) {
    return (
        <>
            <button
                onClick={onClick}
                className="Button"
                type="button">load more</button>
        </>
    );
}
 
export default Button;