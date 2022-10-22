import React, { Component } from "react"

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // return(
        //     <div>
        //         <div>Welcome UserName</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )

        // // Approach 1: Use if-else condition in render method
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome UserName</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // // Approach 2: Element Variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome UserName</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div> {message} </div>


        // // Approach 3: Ternary conditional operator (Can be used inside the JSX)
        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome UserName</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )

        // Approach 4: Short-circuit operator (just a specific case of ternary operator approach )
        // when you want to render something or nothing 
        // is isLogged true, render name, else render nothing
        return this.state.isLoggedIn && <div>Welcome UserName</div>

    }
}

export default UserGreeting
