"use strict";
function zipList(array1, array2) {
    const result = [];
    const maxLength = Math.max(array1.length, array2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < array1.length) {
            result.push(array1[i]);
        }
        if (i < array2.length) {
            result.push(array2[i]);
        }
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(array1, array2) {
    return array1.reduce((acc, currentValue, index) => {
        acc.push(currentValue);
        if (index < array2.length) {
            acc.push(array2[index]);
        }
        return acc;
    }, []);
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
