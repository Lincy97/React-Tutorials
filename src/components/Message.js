import React, {Component} from 'react'

class Message extends Component {
    constructor () {
        // call to super then this.state which is an object
        // the state object has a property call message initialised to 'Welcome visitor'
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        // set the state in class component 
        this.setState( {
            message: 'Thank you for subscribing'
        } )
    }
    
    render () {
        return (
             <div>
                    {/* bind this.state value with curly braces {} */}
                    <h1> { this.state.message }  </h1> 
                    <button onClick={ () => this.changeMessage() }> Subscribe </button>
             </div>
        ) 
    }

}

export default Message