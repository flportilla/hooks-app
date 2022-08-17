import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const Quote = ({ quote, author }) => {

    const pRef = useRef(null)
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    useLayoutEffect(() => {

        const { width, height } = pRef.current?.getBoundingClientRect()
        setBoxSize({ width, height })

    }, [])


    return (
        <>
            <blockquote
                className='blockquote text-end'
                style={{ display: 'flex' }}>
                <p ref={pRef} className="mb-1"> {quote} </p>
                <footer className="blockquote-footer mt-2">{author} </footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}