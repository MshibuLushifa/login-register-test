import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Auth extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isRegister: false
        }
    }


    login() {
        // alert('login called')
        // console.log('state', this.state)

        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res) => {
                // console.log(JSON.stringify(res.access_token))
                // console.log(JSON.stringify(res.user))
                localStorage.setItem('auth', JSON.stringify(res.access_token))

                // {
                //     <Redirect to = "/home" ></Redirect>
                // }
            })
        })
    }

    register() {
        // alert('login called')
        // console.log('state', this.state)

        fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res) => {
                // console.log(JSON.stringify(res.access_token))
                console.log('auth user: ' + JSON.stringify(res.user))
                // localStorage.setItem('auth', JSON.stringify(res.access_token))
                this.login()
            })
        })
    }

    render() {

        const access_token = JSON.parse(localStorage.getItem('auth'))

        return (
            <div>
                {
                    access_token ? <Redirect to = "/home" ></Redirect> : null
                }

                {
                    !this.state.isRegister ?
                        <div>
                            <input
                                type="text"
                                placeholder="email"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }
                                } /> <br /><br />

                            <input
                                type="text"
                                placeholder="password"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }
                                } /> <br /><br />
                            <button onClick={() => this.login()} >Login</button>
                            <button onClick={() => this.setState({ isRegister: true })}>Go to Register</button>
                        </div>
                        :
                        <div>
                            <input
                                type="text"
                                placeholder="name"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            name: e.target.value
                                        })
                                    }
                                } /> <br /><br />

                            <input
                                type="text"
                                placeholder="email"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }
                                } /> <br /><br />

                            <input
                                type="text"
                                placeholder="password"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }
                                } /> <br /><br />

                            <input
                                type="text"
                                placeholder="confirm password"
                                onChange={
                                    (e) => {
                                        this.setState({
                                            password_confirmation: e.target.value
                                        })
                                    }
                                } /> <br /><br />
                            <button onClick={() => this.register()} >Register</button>
                            <button onClick={() => this.setState({ isRegister: false })} >Go to login</button>
                        </div>
                }
            </div>
        )
    }
}
