import React from 'react'

// // 0. Default not destructuring
// const Hello = props => {
//     return(
//         <div>
//             <h1>Hello { props.name } a.k.a { props.heroName } </h1>
//         </div>
//     )
// }


// // 1. Destructuring in function body
// const Hello = props => {
//     const {name, heroName} = props
//     return(
//         <div>
//             <h1>Hello { name } a.k.a { heroName } </h1>
//         </div>
//     )
// }


// 2. Destructuring in Parameter
const Hello = ({name, heroName}) => {
    return(
        <div>
            <h1>Hello { name } a.k.a { heroName } </h1>
        </div>
    )
}



export default Hello