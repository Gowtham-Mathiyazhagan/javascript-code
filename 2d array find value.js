let arr = [[33, 4, 55, 32], [2, 31, 5], [4, 10, 21, 35, 12]];
let tar = 32
let solve = (arr, tar) => {
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === tar) {
                return "yes existing";
            }
        }
    }

    return "no existing";

}
console.log(solve(arr, tar));