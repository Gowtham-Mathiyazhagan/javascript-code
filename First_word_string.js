function fun(words){
    return words.charAt(0).toUpperCase() + words.slice(1);
}
let word="hi welcome".split(" ");
console.log(word)
let change=word.map((words)=>{
  return fun(words)
})

console.log(change)
