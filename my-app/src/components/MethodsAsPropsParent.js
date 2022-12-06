import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handlerSignIn = () => {
        this.setState({
            isLoggedIn:true
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn} />
                    handlerSignIn={this.handlerSignIn}
            </div>
        )
    }
}

export default MethodsAsPropsParent