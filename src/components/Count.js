import React, {Component} from 'react'

class Count extends Component {

    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment () {
        // // example 1: modify the state directly
        // // UI is not rendering whenever the state is changing
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)

        // // example 2: set the state in class component 
        // // the count value in UI increments change
        // this.setState( {
        //     count: this.state.count + 1
        // } )
        // // this one won’t change, because setState are asynchronous, so the console.log() here is being called before the state is actually set
        // console.log(this.state.count) 

        // example3: pass updated state.value in a callback function as the second parameter to the setState method
        // 1st parameter = is an object which sets the state value
        // 2nd parameter = arrow function where we simply log the updated state value
        this.setState( 
            {
            count: this.state.count + 1
            } ,
            () => { 
                console.log('Callback value', this.state.count )
            } 
        )

    }
    
    render () {
        return (
            <div>
                <h1>Count - { this.state.count } </h1>
                <button onClick={ () => this.increment()}>Increment</button>
            </div>
        )
    }
}



export default Count