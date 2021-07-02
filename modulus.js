const modulus = (dividend , divisor) => {
    const quotient = dividend / divisor
    const rectNumber = quotient.toFixed(0) * divisor
    return dividend - rectNumber
}

console.log(modulus(58,8))