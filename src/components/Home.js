import React, { Component } from 'react'

export default class Home extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userDate : null,
        }
    }

    componentDidMount() {
        const access_token = JSON.parse(localStorage.getItem('auth'))

        fetch('http://127.0.0.1:8000/api/auth/user-profile', {
            
            headers: new Headers({
                'Authorization': 'Bearer ' + access_token,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              }),
            // body: ''
        }).then((result)=>{
            result.json().then((userDate)=>{
                
                this.setState({userDate}, ()=>{
                    
                })
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.userDate ?
                    // Data is available
                    <div>
                        <h1>Hello, { this.state.userDate.name }</h1>
                        <div>{ this.state.userDate.email }</div>
                    </div>
                    : 
                    // Data is not available
                    null
                }
            </div>
        )
    }
}
