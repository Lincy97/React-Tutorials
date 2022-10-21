import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }

    return (
        <div>
            {/* pass the function as the event handler  
            onClick={clickHandler()}  become a function call 
            onClick={clickHandler} a handler to be a function, 
            event handler is a function, not a function call
            */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick