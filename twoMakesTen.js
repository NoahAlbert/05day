function isSumTen(num1,num2){
    return num1 + num2 === 10 || num1 === 10 || num2 === 10
}

console.log(isSumTen(4,10))

//practice writing ternaries, not ideal code
function isSumTernary (num1,num2){
    return ((num1 + num2) === 10)?
    true : false
}

console.log(isSumTernary(6,4))