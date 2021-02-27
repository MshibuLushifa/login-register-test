import React, { Component } from 'react'

import {
    Link
} from 'react-router-dom'  

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='home' >Home</Link>
                <Link to='about' >About</Link>
                <Link to='profile' >List</Link>
                <Link to='/' >Login</Link>
            </div>
        )
    }
}
