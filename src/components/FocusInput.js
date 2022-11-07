import React, { Component } from 'react'
import Input from './Input'


// When we click on the input button in the parent component, 
// the input element in the child component should receive the focus
class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.compenenRef = React.createRef()
    }

    clickHandler = () => {
        // call focusInput() method from Input component
        this.compenenRef.current.focusInput()
    }

    render() {
        return(
            <div>
                <Input ref={this.compenenRef} />
                <button onClick={this.clickHandler}>Focus inputRef</button>
            </div>
        )
    }
}

export default FocusInput