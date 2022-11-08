import React, { Component } from 'react'
import FRInput from './FRInput'


class FRParentInput extends Component {

    constructor(props) {
        super(props)

        // 1. Parent component create a ref
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        // 5. Now the parent can directly access this input element using this.inputRef.current
        // because of using forward ref technique, 
        // inputRef.current = native input element and not the input component instance
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                {/* 2. Attach the ref to the child component instance */}
                {/* 3. The child component sees that ref and tell parent component that 
                he is NOT the guy looking for, want the native element right, let me directly introduce him to you */}
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus input</button>
            </div>
        )
    }
}

export default FRParentInput