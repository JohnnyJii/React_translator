import React, {  useState } from 'react'

const Input = (props) => {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="input-container">
            <div>
                <input
                    text="text"
                    placeholder= { props.isTranslationPage ? "Enter the phrase you want to translate" : "whats your name?" }
                    value= {inputValue}
                    maxLength= {props.inputMaxLength}
                    onChange= {(e) => {
                        setInputValue(e.target.value)
                    }}
                    />
                    <button onClick={() => {props.handleClick(inputValue)}}>
                        {props.isTranslationPage ? "Translate ": " Login"}
                    </button>
            </div>
        </div>
    )
}

export default Input;