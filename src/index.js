module.exports = function reverse (n) {
    const plusNum = Math.abs(n)
    let str = String(plusNum)
    return str.split('').reverse().join('')
}
