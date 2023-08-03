let arr = [124, 34, 1, 3421, 54, 78]
let solve = (arr) => {
  let len = [];
  for (i = 0; i < arr.length; i++) {
    len.push(String(arr[i]).length)
  }
  let count = 0;
  len.forEach((element) => {
    if (element % 2 == 0) {
      count++
    }

  });
  return count;
}
console.log(solve(arr))