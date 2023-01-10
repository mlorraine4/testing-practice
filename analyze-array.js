function analyzeArray(array) {
    let object = {};
    let max = array[0];
    let min = array[0];
    let total = 0;
    for(i=0; i<array.length;i++) {
        if (array[i] > max) {max = array[i]}
        if (array[i] < min) {min = array[i]}
        total += array[i];

    }
    object.min = min;
    object.max = max;
    object.length = array.length;
    object.average = total/array.length;
    return object
}

console.log(analyzeArray([32,1,3,28]));
//{min: 1, max: 32, length: 4, average: 16}
module.exports = analyzeArray;