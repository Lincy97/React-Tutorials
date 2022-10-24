import React from 'react'

function Inline() {

    // create object and apply it to the style attribute
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    
    return (
        <div>
            <h1 className="error">Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline