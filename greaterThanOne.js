//original way
function isFractionGreaterThan1 (numerator, denominator){
    return numerator/denominator > 1
}

console.log(isFractionGreaterThan1(7,8))

//alternate simpler way
function isFractionGreaterThan1alt (numerator, denominator){
    return numerator > denominator
}

console.log(isFractionGreaterThan1alt(3,8))
