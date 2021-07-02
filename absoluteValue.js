//normal function definition
function absoluteVal(num){
    return (num > 0)? num : num * -1
}

console.log(absoluteVal (-52))

//arrow function definition
const absoluteValArrow = (num) => {
    return (num > 0)? num : num * -1
}

console.log(absoluteValArrow (-52))