import React from 'react'

// function FRInput() {
//     return(
//         <div>
//             <input type='text' />
//         </div>
//     )
// }

// 4. Child component receive the ref from the parent component and attaches it to the native input element
const FRInput = React.forwardRef( (props, ref) => {
    return(
        <div>
            {/* 6. The child element is basically forwarding this reference */}
            <input type='text' ref={ref} />
        </div>
    )
}) 

export default FRInput