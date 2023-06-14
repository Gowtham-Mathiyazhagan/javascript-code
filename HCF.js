
function gcd(a, b)
{
	if (b == 0)
  {
		return a;
  }else{	
	return (a, a % b);
  }
}
	

var a = 15, b = 45;

console.log("GCD of " + a +" and " + b +
				" is " + gcd(a, b));
