import React, {useEffect, useState} from "react"

function Quotes() {

const [quote, setQuote] = useState("Hello")
const [currentIndex, setCurrentIndex] = useState(0)

// useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//     .then(res => res.json())
//     .then(data => setQuote(data))
// })

function handleClick() {

}

return (
    <div>
        <div className="button-container">
            <button className="button-53" role="button" onClick={handleClick}>Click for Quote</button>
        </div>
        <div className="quote-container">
                <h3>{quote}</h3>
        </div>
    </div>
)
}

export default Quotes