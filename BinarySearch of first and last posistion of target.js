function searchRange(nums, target) {
    function binarySearch(nums, target, findFirst) {
        let start = 0;
        let end = nums.length - 1;
        let result = -1;

        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if (nums[mid] === target) {
                result = mid;
                if (findFirst) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return result;
    }

    const firstOccurrence = binarySearch(nums, target, true);
    const lastOccurrence = binarySearch(nums, target, false);

    if (firstOccurrence !== -1) {
        return [firstOccurrence, lastOccurrence];
    } else {
        return [-1, -1];
    }
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target));
