import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustoHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />

            <button
                type='button'
                onClick={() => increment()}
                className='btn btn-primary'>+1</button>
            <button
                type='button'
                onClick={reset}
                className='btn btn-primary'>reset</button>
            <button
                type='button'
                onClick={() => decrement()}
                className='btn btn-primary'>-1</button>

        </>
    )
}
