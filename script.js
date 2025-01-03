function mergeSort(array) {
    // Determine the size of the array.
    var arraySize = array.length;

    //Base case: array with 1 element are alredy sorted.
    if (arraySize <= 1) {
        return array;
    }

    //Split the array into two halves.
    var midpoint = Math.floor(arraySize / 2);
    var leftArray = array.slice(0, midpoint);
    var rightArray = array.slice(midpoint);

    //Recursively sort both halves.
    var sortedLeft = mergeSort(leftArray);
    var sortedRight = mergeSort(rightArray);

    //Merge the sorted halves and return the result
    return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
    var sortedArray = [];
    var i = 0, j = 0;

    //Merge elements from both arrays in sorted order.
    while (i < leftArray.length && j < rightArray.length) {
        if (rightArray[j] < leftArray[i]) {
            sortedArray.push(rightArray[j++]);
        } else {
            sortedArray.push(leftArray[i++]);

        }
    }

    // Add any remaining elements from both arrays.
    return sortedArray
        .concat(leftArray.slice(i))
        .concat(rightArray.slice(j));
}
