const hotDogStack = ['🌭','🌭','🌭','🌭','🌭','🌭','🌭']
console.log (hotDogStack.length)

// Build a function using a callback
function getHotDog(next) {
    if (!hotDogStack.length) {
        throw 'no more hot dogs 😭'
    }
    const hotDog = hotDogStack.pop()
    next(hotDog)
}



// Call a function with a callback
try {
    getHotDog(hotdog => console.log('I ate the', hotdog))
    getHotDog(hotdog => console.log('wow yummy', hotdog))

}
catch(err) {
    console.error('error: ' + err)
}