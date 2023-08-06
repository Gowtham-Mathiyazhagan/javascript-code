function orderAgnosticBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    const isAscending = arr[start] < arr[end];
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (isAscending) {
            if (target > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (target < arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

// Test example
let arr = [99,88,77,66,55,44,33]
let target = 33;
console.log(orderAgnosticBinarySearch(arr, target));
