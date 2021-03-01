import React, { useEffect, useRef, useState } from 'react'
import AlertModal from '../components/AlertModal'
import { Link, Redirect } from "react-router-dom";
import TranslationResult from '../components/TranslationResult'
import { getUser, logout as logoutUser } from '../util/storage'

const ProfilePage = (props) => {
    document.body.style.background = "linear-gradient(0deg, #eaeff4 72%, #ffc75f 20%)";

    const [state, setState] = useState({
        showModal: false,
        sentenceToTranslate: "",
    });

    console.log(state);

    const logout = () => {
        logoutUser();

        props.history.replace("/");
    };

    const closeModal = () => {
        setState({ ...state, showModal: false});
    };

    return (
        <React.Fragment>
            <button id="logoutBtn" onClick={logout}>Log out</button>

        {state.showModal && (
            <AlertModal closeModal={closeModal}>
                <React.Fragment>
                    {state.sentenceToTranslate.split("").map((sign, i) => (
                        <TranslationResult key={i} sign={sign} />
                    ))}
                </React.Fragment>
            </AlertModal>
        )}
        <ol>
            {getUser().sentences.map((obj, i) => {
                return (
                    <li onClick={() => {
                        setState({ ...state, sentenceToTranslate: obj.sentence, showModal: true});
                    }}
                    key={i}>
                        {obj.sentence}
                    </li>
                )
            })}
        </ol>
        </React.Fragment>
    )
}

export default ProfilePage;