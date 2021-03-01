import React, { useRef } from 'react'
import useClickOutside from '../util/useClickOutSide'

const AlertModal = ({ children, closeModal }) => {
    const ref = useRef();
    useClickOutside(ref, closeModal)

    return ( 
        <div className="backdrop">
            <div ref={ref} className="model">
                {children}
            </div>
        </div>
    )
}

export default AlertModal;