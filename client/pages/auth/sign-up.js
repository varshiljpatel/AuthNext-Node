import React from 'react'
import { useState } from 'react'

const signup = () => {
    const [value, setValue] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
    })
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form onSubmit={ async (e) => {
                e.preventDefault()
                const {name, email, password, phone, username } = value;
                console.log(value);
                const res = await fetch('http://localhost:8080/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name, username, password, phone, email
                    })
                })
            }}>
                Username :
                <input
                    type='text'
                    name='username'
                    value={value.username}
                    onChange={handleChange}
                /><hr />
                Name :
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    onChange={handleChange}
                /><hr />
                Email :
                <input
                    type='text'
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                /><hr />
                Phone :
                <input
                    type='text'
                    name='phone'
                    value={value.phone}
                    onChange={handleChange}
                /><hr />
                PAssword :
                <input
                    type='text'
                    name='password'
                    value={value.pass}
                    onChange={handleChange}
                /><hr />
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default signup