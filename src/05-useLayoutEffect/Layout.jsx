import React from 'react'
import { Quote, Loading } from '../03-examples'
import { useCounter, useFetch } from '../hooks'

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    //There are 103 quotes in this API   
    const quotesById = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const { data, isLoading } = useFetch(quotesById)

    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />
            {
                isLoading
                    ? <Loading />
                    : <Quote quote={quote} author={author} />
            }

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
                disabled={isLoading}
            >
                Next quote
            </button>
        </>
    )
}
