import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setcounter] = useState(0)

    const increment2 = useCallback(
        () => {
            setcounter(current => current + 1)
        },
        [],
    )

    // const increment = () => {
    //     setcounter(counter + 1)
    // }

    return (

        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />


            <ShowIncrement increment={increment2} />

        </>
    )
}
