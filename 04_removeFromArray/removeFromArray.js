const removeFromArray = function(givenArray, ...args) {
    const newArray = [];
    givenArray.forEach((item) => {
        if (!args.includes(item)) {
        newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
