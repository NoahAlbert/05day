const calcRectangleArea = (l, h) => {
    return l * h
}

const calcTriangleArea = (l, h) => {
    return l * h / 2
}

const calcEllipseArea = (l, h) => {
    return (l / 2) * (h / 2) * Math.PI
}

const dimensionVertical = 25
const dimensionHorizontal = 17

console.log('Rectangle area: ', calcRectangleArea(dimensionVertical,dimensionHorizontal))
console.log('Triangle area: ', calcTriangleArea(dimensionVertical,dimensionHorizontal))
console.log('Ellipse area: ', calcEllipseArea(dimensionVertical,dimensionHorizontal))
