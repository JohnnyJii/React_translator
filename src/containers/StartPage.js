import React from 'react'
import Input from '../components/Input'
import { addUser, getUser } from '../util/storage'
import { Redirect } from 'react-router-dom'
import Splash from '../assets/Splash.svg'
import LogoHello from '../assets/Logo-Hello.png'

const StartPage = (props) => {
    document.body.style.background = "linear-gradient(0deg, #eaeff4 70%, #ffc75f 20%)";
    
    const handleClick = (userName) => {
        console.log(userName)
        addUser(userName)
        props.history.replace("/translation")
    }

    if (getUser() != null) {
        return<Redirect to="/translation" />
    }
    return (
        <React.Fragment>
            <div className="row-container">
                <div>
                    <img alt="splash" id="splash" src={Splash}></img>
                    <img alt="logo" id="hello-logo" src={LogoHello}></img>
                </div>
            </div>
            <div>
                <h1>Welcome</h1>
                <h5>Lets get started</h5>
            </div>

            <Input inputMaxLength={30} handleClick={handleClick} />
        </React.Fragment>
    )
} 

export default StartPage;