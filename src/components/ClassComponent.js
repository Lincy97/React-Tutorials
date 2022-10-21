import React, {Component} from 'react'

// // 0. Default not destructuring
// class ClassComponent extends Component {
//     render() {
//         return <div><h1>Hello { this.props.name } a.k.a { this.props.heroName} </h1></div>
//     }
// }

// 1. Destructuring in function body
class ClassComponent extends Component {
    render() {
        const {name, heroName} = this.props
        // const {name, heroName} = this.state
        return (
            <h1>Welcome { name } a.k.a { heroName} </h1>
        )
    }
}

export default ClassComponent