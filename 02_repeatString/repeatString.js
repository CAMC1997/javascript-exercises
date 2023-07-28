const repeatString = function(givenString, numberTimes) {
    let fullString = '';
    if (numberTimes < 0) {
        return 'ERROR';
    }
    while (numberTimes > 0) {
        fullString += givenString;
        numberTimes--;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
