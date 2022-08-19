import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre aria-label="pre-tag">{JSON.stringify(user, null, 3)}</pre>

            <button className='btn btn-primary'
                type='button'
                onClick={() => setUser({ id: 123, name: 'flportilla' })}
                aria-label="setUser-button"
            >
                set user
            </button>
        </>
    )
}