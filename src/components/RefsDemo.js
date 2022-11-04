import React, { Component } from 'react'
 
class RefsDemo extends Component {

    constructor(props) {
        super(props)

        // create new property
        // assign React.createRef to this property
        // *common to create refs in the constructor so that can be referenced throughout the component
        this.inputRef = React.createRef()
        
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbRef) {
            // the Dom node is directly accessed using the ref property => not need .current
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        // accessing the value property of the input DOM node which is available as the current property
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
 
export default RefsDemo
