import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const PageNotFound = () => {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        }, 5000);
    }, []);

    return ( 
        <div style= {{ textAlign: "center"}}>
            Page {location.pathname} you are lost, no business here... Hold on and daddy quides you...
        </div>
    )
}

export default PageNotFound;