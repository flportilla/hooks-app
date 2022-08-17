import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'flportilla',
        email: 'flportilla@test.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('called')
    }, [])


    return (
        <>
            <h1>Simple form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                username === 'flportilla2' && <Message />
            }
            <input
                type="email"
                className="form-control mt-2"
                placeholder="flportilla@test.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}
