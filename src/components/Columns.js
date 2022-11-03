import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: "Title A",
            details: "Details A"
        }
    ]
    return(
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <td>Title</td>
                        <td> {item.title} </td>
                        <td> {item.details} </td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Columns