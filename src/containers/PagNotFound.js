import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const PageNotFound = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        }, 3000);
    }, []);

    return ( 
        <div style= {{ textAlign: "center"}}>
            Page {location.pathname} not found, wait 3 seconds
        </div>
    )
}

export default PageNotFound;