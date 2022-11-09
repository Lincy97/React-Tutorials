import React from "react"
import ReactDOM from "react-dom"

function PortalDemo() {
    // return ReactDOM.createPortal( child element, container element)
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo