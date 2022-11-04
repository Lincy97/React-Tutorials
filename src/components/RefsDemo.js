import React, { Component } from 'react'
 
class RefsDemo extends Component {

    constructor(props) {
        super(props)

        // create new property
        // assign React.createRef to this property
        // *common to create refs in the constructor so that can be referenced throughout the component
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        // accessing the value property of the input DOM node which is available as the current property
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
 
export default RefsDemo
