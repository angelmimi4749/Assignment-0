function setUnionOfAnyAmountOfSets(...args) {
    const union = new Set();
    args.forEach( S => S.forEach( e => union.add(e)))
    return union;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;