import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import './Auth.css'

class Auth extends Component {
    constructor () {
        super()
        this.state = {
            username: null,
            password: null,
        }
    }

    handleInputUser = (val) => {
        this.setState({ username: val})
    }

    handleInputPass = (val) => {
        this.setState({ password: val})
    }

    addUser = (username, password) => {
        axios.post('/api/users', {
            data: {
                username: username,
                password: password,
                profile_pic: `https://robohash.org/${this.state.username}.png`,
            }
        })
        .then(result => {
            axios.post('/api/user', {
                data: {
                    username: username,
                    password: password
                }
            })
            .then(result => {
                this.props.updateUser(result.data[0])
                this.props.history.push('/dashboard')
            })
        })
    }

    loginUser = (username, password) => {
        axios.post('/api/user', {
            data: {
                username: username,
                password: password
            }
        })
        .then(result => {
            this.props.updateUser(result.data[0])
            this.props.history.push('/dashboard')
        })
    }


    render() {
        return (
            <div className='Authbody'>
                <div className='Authbox'>
                    <img src={require("../../assets/helo_logo.png")} alt='Helo Logo'/>
                    <h1>Helo</h1>
                    <div className='inputs'>Username:<input onChange={(e) => this.handleInputUser(e.target.value)}></input></div>
                    <div className='inputs'>Password:<input type="password" onChange={(e) => this.handleInputPass(e.target.value)}></input></div>
                    <div className='buttons'>
                        <button className='button' onClick={() => {this.loginUser(this.state.username, this.state.password)}}>Login</button>
                        <button className='button' onClick={() => {this.addUser(this.state.username, this.state.password)}}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (null, {updateUser}) (Auth)

// "https://robohash.org/YOUR-TEXT.png"