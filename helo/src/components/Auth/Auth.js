import React, { Component } from 'react'

export default class Auth extends Component {
    constructor () {
        super()
        this.state = {
            username: null,
            password: null
        }
    }

    handleInputUser = (val) => {
        this.setState({ username: `${val}`})
    }

    handleInputPass = (val) => {
        this.setState({ password: `${val}`})
    }

    render() {
        return (
            <div>
                <h3>Auth</h3>
                username:<input onChange={(e) => this.handleInputUser(e.target.value)}></input>
                password:<input onChange={(e) => this.handleInputPass(e.target.value)}></input>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}