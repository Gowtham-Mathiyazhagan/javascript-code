let a=prompt();
let uppercase=0;
let lowercase=0

for(i=0;i<=a.length-1;i++){
    if(a[i]>='A'&&a[i]<='Z')
    {
        uppercase++;
    }
    else if(a[i]>='a'&&a[i]<='z'){
        lowercase++
    }
}

console.log(uppercase,lowercase);