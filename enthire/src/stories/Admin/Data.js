import React from 'react'

function Data(props) {
    const { heading, subHeading, about, code} = props
    return (
        <div>
            <p>{heading}</p>
            <p>{subHeading}</p>
            <p>{about}</p>
            <p>{code}</p>
        </div>
    )
}

export default Data
