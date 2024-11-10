export function getValidateCardHolderName(name) {
    if (name.length > 0 && name.length <= 35) return name
    if (name.length === 0) return ""
    return null
}
export function getValidMonths() {
    let month = []

    for (let i = 1; i <= 12; i++) {
        month.push(i < 10 ? `0${i}` : `${i}`)
    }
    return month
}

export function getValidYears() {
    let date = new Date()
    const currentYear = date.getFullYear()
    const years = []

    for (let i = currentYear; i <= currentYear + 12; i++) {
        years.push(i % 100 < 10 ? `0${i % 100}` : `${i % 100}`)
    }
    return years
}

export function getLastTwoDigitsOfCurrentYear() {
    let date = new Date()
    return `${date.getFullYear() % 100}`
}

export function getValidateCardNumber(number) {
    number = parseInt(number)
    number = number ? `${number}` : ""
    if (number && number.length <= 16) {
        return number
    } else if (number === "") {
        return number
    }

    return null
}