import React from 'react'

function MemoComp( {name} ) {
    console.log('Rendering Memo Component')
    return(
        <div> {name} </div>
    )
}

// React.memo() - to avoid re-rendering this memo functional component 
// Higher order component
// React.memo accepts a component add somethings to that component and return a new enhanced component
export default React.memo(MemoComp) 