let arr = [5, 1, 9, 6, 7, 4];
/*
for (let i = 0; i < (arr.length - 1); i++)   {
    if (arr[i] > arr[i+1])  {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    console.log("i=",i,arr);
}
*/

/* OUTPUT FOR SINGLE PASS
i= 0 [ 1, 5, 9, 6, 7, 4 ]
i= 1 [ 1, 5, 9, 6, 7, 4 ]
i= 2 [ 1, 5, 6, 9, 7, 4 ]
i= 3 [ 1, 5, 6, 7, 9, 4 ]
i= 4 [ 1, 5, 6, 7, 4, 9 ]
*/

// BUBBLE SORT ALGORITHM

for (let i = 0; i < arr.length - 1; i++)    {
    for (let j = 0; j < arr.length - i - 1; j++)    {
        if (arr[j] > arr[j + 1])    {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        console.log("i=",i,"j=",j,arr);
    }
}

let arr = [5, 1, 9, 6, 7, 4];
/* BUBBLE SORT OUTPUT
i= 0 j= 0 [ 1, 5, 9, 6, 7, 4 ]
i= 0 j= 1 [ 1, 5, 9, 6, 7, 4 ]
i= 0 j= 2 [ 1, 5, 6, 9, 7, 4 ]
i= 0 j= 3 [ 1, 5, 6, 7, 9, 4 ]
i= 0 j= 4 [ 1, 5, 6, 7, 4, 9 ]
i= 1 j= 0 [ 1, 5, 6, 7, 4, 9 ]
i= 1 j= 1 [ 1, 5, 6, 7, 4, 9 ]
i= 1 j= 2 [ 1, 5, 6, 7, 4, 9 ]
i= 1 j= 3 [ 1, 5, 6, 4, 7, 9 ]
i= 2 j= 0 [ 1, 5, 6, 4, 7, 9 ]
i= 2 j= 1 [ 1, 5, 6, 4, 7, 9 ]
i= 2 j= 2 [ 1, 5, 4, 6, 7, 9 ]
i= 3 j= 0 [ 1, 5, 4, 6, 7, 9 ]
i= 3 j= 1 [ 1, 4, 5, 6, 7, 9 ]
i= 4 j= 0 [ 1, 4, 5, 6, 7, 9 ]
*/
/*
 * O Notation. The best case: O(n). Worst case scenario: O(n**2)
*/
// RECURSIVE VERSION

function bubbleSort(arr, n)    {
    // If array just has 1 element.
    if (n == 1)
        return;

    // First pass, moves largest element to the end
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr [i + 1])   {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
        console.log("i=",i,arr);
    }
    bubbleSort(arr, n - 1);
}

bubbleSort(arr, arr.length);


/* BUBBLE SORT RECURSIVE OUTPUT
i= 0 [ 1, 5, 9, 6, 7, 4 ]
i= 1 [ 1, 5, 9, 6, 7, 4 ]
i= 2 [ 1, 5, 6, 9, 7, 4 ]
i= 3 [ 1, 5, 6, 7, 9, 4 ]
i= 4 [ 1, 5, 6, 7, 4, 9 ]
i= 0 [ 1, 5, 6, 7, 4, 9 ]
i= 1 [ 1, 5, 6, 7, 4, 9 ]
i= 2 [ 1, 5, 6, 7, 4, 9 ]
i= 3 [ 1, 5, 6, 4, 7, 9 ]
i= 0 [ 1, 5, 6, 4, 7, 9 ]
i= 1 [ 1, 5, 6, 4, 7, 9 ]
i= 2 [ 1, 5, 4, 6, 7, 9 ]
i= 0 [ 1, 5, 4, 6, 7, 9 ]
i= 1 [ 1, 4, 5, 6, 7, 9 ]
i= 0 [ 1, 4, 5, 6, 7, 9 ]
*/
