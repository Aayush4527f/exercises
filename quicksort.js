//Partition function
function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high; j++) {
        if (array[j] <= pivot) {
            i++;
            let temp = array[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log("pivot=", pivot, "array[j]", array[j], "array[i]", array[i], array);
        }
    }
    return i;
}
//Quicksort function
function quicksort(array, lo, hi) {
    if (lo >= 0 && hi >= 0) {
        if (lo < hi) {
            p = partition(array, lo, hi);
            quicksort(array, lo, p - 1);
            quicksort(array, p + 1, hi);
            console.log(p)
        }
    }
}

let arr = [8, 9, 1, 2, 7, 4];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
