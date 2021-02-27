import React, { Component } from 'react'

export default class Auth extends Component {
    
    login() {
        // alert('login called')
        // console.log('state', this.state)
        
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST', 
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json',
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(JSON.stringify(res.access_token))
                console.log(JSON.stringify(res.user))
                localStorage.setItem('auth', JSON.stringify(res.access_token))
            })
        })
    }
    
    render() {
        return (
            <div>
                
                <div>
                    <input 
                        type = "text"
                         onChange = {
                            (e)=>{
                                this.setState({
                                    email: e.target.value
                                })
                            }
                         }/> <br /><br />

                    <input 
                        type = "text" 
                        onChange = {
                            (e)=>{
                                this.setState({
                                    password: e.target.value
                                })
                            }
                        }/> <br /><br />
                    <button onClick = {() => this.login()} >Login</button>
                </div>

            </div>
        )
    }
}
