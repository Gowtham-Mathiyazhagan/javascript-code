function val(a) {
       
  let negative=[ ];
  for(i=0; i<=a.length-1;i++)
  {
      if(a[i]<0){
          negative.push(a[i]);
      }
  }
  return negative;
}
console.log(val(a=[-1,2,-3,-4,5]));  