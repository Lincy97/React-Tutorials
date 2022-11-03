import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Lincy"
        }
    }

    // every 2 seconds, the setState method is called which will rerender the parent component
    // and if the parent component rerender, the child component will also rerender (unless return false from shouldComponentUpdate )
    // In this case, every 2 seconds Regular Comp will rerender, but the Pure Comp is never rerender
    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: "Lincy"
            })
        }, 2000)
    }

    render() {
        console.log('***************Parent Comp render***************')
        return(
            <div>
                Parent Component
                <RegularComp name={this.state.name} ></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
            
        )
    }
}

export default ParentComp