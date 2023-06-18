const a=[1,2,3,4,5,6,7,8,9];

let b=a.map((value)=>{

  return Math.round( Math.sqrt(value));
}
);
console.log( b);