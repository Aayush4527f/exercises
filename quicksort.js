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
            console.log("pivot=", pivot, "array[j]", array[j], "array[i]", array[i], JSON.stringify(array));
        }
    }
    return i;
}
//Quicksort function
function quicksort(array, lo, hi) {
    if (lo >= 0 && hi >= 0) {
        if (lo < hi) {
            p = partition(array, lo, hi);
            //left hand side
            console.log("LHS",JSON.stringify(array.slice(lo,p-1)))
            quicksort(array, lo, p - 1);
            //right hand side
            console.log("RHS",JSON.stringify(array.slice(p+1,hi)))
            quicksort(array, p + 1, hi);
            // console.log(p)
        }
    }
}

let arr = [895,234,654,342,564,634,432,237,543,876,868,908,543];
console.log(arr);
quicksort(arr, 0, arr.length - 1);