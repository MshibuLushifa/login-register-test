import React from 'react'

import { Redirect } from 'react-router-dom';

function Protected(props) {

    const Cmp = props.cmp;

    const access_token = JSON.parse(localStorage.getItem('auth'))

    // console.log("access_token: " + access_token)

    return (
        <div>
            {
                access_token ? <Cmp /> : <Redirect to = "/" ></Redirect>
            }
        </div>
    )
}

export default Protected
