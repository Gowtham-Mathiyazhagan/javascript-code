//if tickets are divisible by month of date print '1' else '0'

let n=6;// number of tickets
let tickets=[22,333,434,212,566,432]
let date=22
function final (dic,date)
{
    let arr =[];
    for(i=0;i<=dic.length-1;i++)
    {
        if(dic[i]%date===0)//tickets is divisible by date print 1 
        {
            arr.push('1')
        }
        else
        {
            arr.push('0');// or print 0
        }
    }
    return arr.join(' ');
}
console.log(final(tickets,date))
