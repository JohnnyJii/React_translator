import React, { useRef, useEffect } from 'react'

const useClickOutSide = (ref, handleClick) => {
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClick()
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [ref, handleClick])
}

export default useClickOutSide;