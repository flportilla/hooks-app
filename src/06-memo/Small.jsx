import React from 'react'

export const Small = React.memo(({ value = 0 }) => {

    console.log('Re rendered again')

    return (
        <small>{value}</small>
    )
})
