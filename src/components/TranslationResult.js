import React from 'react'

const TranslationResults = (props) => {
    if (props.sign === " ") {
        return <div className="sentence-divider"></div>
    }
    return (
        // Choose the image from signs. use props to refere the letter
        <img
            id="sign"
            alt={props.sign}
            src={require("../assets/signs/" + props.sign + ".png").default}
            style={{props}}></img>
    )
}

export default TranslationResults;