import React, { useState } from "react";
import { getValidMonths, getValidYears, getLastTwoDigitsOfCurrentYear, getValidateCardNumber, getValidateCardHolderName } from "../../common/utils/validate"
import { describeArc } from "../../common/utils/svgArc"
import Chip from "../Chip"
import NFC from "../NFC";
import "./cardStyle.css"

function getModifyNumber(number) {
    let modifyNumber = "", count = 0

    for (let i = 0; i < number.length; i++) {
        if (count === 4) {
            modifyNumber += ` ${number[i]}`
            count = 0
        } else {
            modifyNumber += number[i]
        }
        count++
    }
    return modifyNumber
}

function Card() {
    const [cardHolderName, setCardHolderName] = useState("Lee M. Cardholder")
    const [cardNumber, setCardNumber] = useState("5412751234123456")
    const [validMonth, setValidMonth] = useState("12")
    const [validYear, setValidYear] = useState(getLastTwoDigitsOfCurrentYear())

    function onCardNumberChange(e) {
        const number = getValidateCardNumber(e.target.value.trim())
        number !== null && setCardNumber(number)
    }

    function onCardHolderNameChange(e) {
        const value = getValidateCardHolderName(e.target.value)
        value !== null && setCardHolderName(value)
    }

    function onValidMonthChange(e) {
        setValidMonth(e.target.value)
    }

    function onValidYearChange(e) {
        setValidYear(e.target.value)
    }

    return <div>
        <div>
            <label htmlFor="holderName">Card Holder Name: </label>
            <input type="text" id="holderName" value={cardHolderName} onChange={onCardHolderNameChange} />
        </div>
        <div>
            <label htmlFor="cardNumber">Card Number: </label>
            <input id="cardNumber" type="text" value={cardNumber} onChange={onCardNumberChange} />
        </div>
        <div>
            <label htmlFor="validity">Valid Thru: </label>
            <span> Month </span>
            <select id="validity" onChange={onValidMonthChange}>
                {getValidMonths().map((month) => <option key={month} value={month} selected={month === validMonth}>{month}</option>)}
            </select> /
            <span> Year </span>
            <select id="validity" onChange={onValidYearChange}>
                {getValidYears().map((year) => <option key={year} value={year} selected={year === validYear}>{year}</option>)}
            </select>
        </div>
        <div className="card">
            <svg className="white-arc" width="1000" height="1000">
                <path className="" id="arc1" d={describeArc(970, 230, 380, 212, 301)} fill="none" stroke="white" stroke-width="2" />
            </svg>
            <div className="card-type text-white">
                world
            </div>
            <NFC />
            <Chip />
            <div className="card-bottom">
                <div className="text-white">
                    <div className="card-number">
                        <span>{getModifyNumber(cardNumber)}</span>
                    </div>
                    <div>
                        <p className="card-validity-text">VALID THRU</p>
                        <span className="card-validity-date">{validMonth}/{validYear}</span>
                    </div>
                    <div className="card-holder-name">{cardHolderName}</div>
                </div>
                <div className="mastercard-logo">
                    <div className="orange circle"></div>
                    <div className="yellow circle"></div>
                </div>
            </div>
        </div>
    </div>
}

export default Card