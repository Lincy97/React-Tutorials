import React from 'react'

const Greet = props => {
    console.log(props);
    return (
        // add on <div> element as a parent, put all element inside this parent element
        // because JSX should contain only 1 wrapper element
        <div>
            <h1>Hello { props.name } a.k.a { props.heroName }</h1>
            { props.children }
        </div>
    )
}


export default Greet