import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current?.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type={"text"}
                placeholder={"Enter your name"}
                className="form-control"
            />

            <button
                type="button"
                className='mt-2 btn btn-primary'
                onClick={onClick}
            >
                Set focus
            </button>
        </>

    )
}
