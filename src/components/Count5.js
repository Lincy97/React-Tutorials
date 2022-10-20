import React, { Component } from 'react'

class Count5 extends Component {
    constructor (){
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState( 
        //     {
        //     count: this.state.count + 1
        //     } ,
        //     () => { 
        //         console.log('Callback value', this.state.count )
        //     } 
        // )

        this.setState(
            (prevState) => (
                {
                    count: prevState.count + 1
                }
            )
        )

        console.log(this.state.count)
      }
   

    increment5() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render () {
        return (
            <div>
                <h1>Count - { this.state.count } </h1>
                <button onClick={()=>this.increment5()}> Increment</button>
            </div>
        )
    }
}

export default Count5


