import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getUser } from '../util/storage'

const Header = () => {
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn ] = useState(false)

    useEffect(() => {
        if (getUser() != null) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [location])

    return (
        <header>
            <h4>Learn sign language</h4>
            {isLoggedIn && (
                <div className="header-links">
                    <Link to="/profile">Profile</Link>
                    <Link to="/translation">Translator</Link>
                </div>
                )}
        </header>
    )
}

export default Header;