import React from 'react'
import Header from '../components/Header'

function Layout ({children}) {
    console.log("hello");
    return(
        <div>
            <Header />
            <main className="container"> {children} </main>
        </div>
    );
}

export default Layout;