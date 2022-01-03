function productOfAnyAmountOfNumbers(...args) {
    let product = 1;
    for (const a of args) {
        product *= a;
    }
    return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;