import React from 'react'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana']
    // use map method to render the list of name
    const nameList = names.map( name => <h2> {name} </h2>)
    return <div> {nameList} </div>

    // return(
    //     <div>
    //         {/* <h2> { names[0] } </h2>
    //         <h2> { names[1] } </h2>
    //         <h2> { names[2] } </h2> */}
            
    //         {/* use map method to render the list of name */}
    //         { names.map(name =>  <h2>{name}</h2>) }

    //     </div>
    // )


}

export default NameList