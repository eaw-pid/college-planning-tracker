import React, {useEffect, useState} from "react"

function Quotes() {

const [quote, setQuote] = useState("")
const [author, setAuthor] = useState("")


// useEffect(() => {
//     fetch("https://api.quotable.io/random")
//     .then(res => res.json())
//     .then(quotes => setQuote(quotes.content))
// }, [])

//https://api.quotable.io/random
function handleClick() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(quotes => {
        setQuote(quotes.content)
        setAuthor(quotes.author)})
}

return (
    <div style={{ textAlign: 'center' }}>
        <div className="quote-heading">
            <h1>Start Thinking Like a College Kid!</h1>
        </div>
        <div className="button-container">
            <button className="button-53" role="button" onClick={handleClick}>Click for Quote</button>
        </div>
        <div className="quote-container" >
                <h3>{quote}</h3>
                <small>{author}</small>
        </div>
    </div>
)
}

export default Quotes