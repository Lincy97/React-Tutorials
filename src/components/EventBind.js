import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }

        // Approach 3
        this.clickHandler = this.clickHandler.bind(this)
    }

    // Approach 1 - 3
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    // Approach 4
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return(
            <div>
                <div> { this.state.message } </div>
                {/* Approach 1: Binding in the render method */}
                <button onClick={ this.clickHandler.bind(this) }>Click</button>

                {/* Approach 2: Use arrow function in the render method */}
                <button onClick={ () => this.clickHandler() }>Click</button>

                {/* Approach 3: Binding in the class constructor
                Deals with binding the event handler in the constructor as opposed to binding in the render method */}
                <button onClick={ this.clickHandler }>Click</button>

                {/* Approach 4: Class property as arrow functions */}
                <button onClick={ this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default EventBind