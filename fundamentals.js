//implement function sigma(num) that given a number, returns the sum of all positive integers up to number(inclusive). ex: sigma(3)  = 6(1+2+3)

function sigma(num)
{
	var sum = 0;
	for(var i = 0; i < num + 1; i++)
	{
		sum += i;
	}
	console.log(sum);
	return sum;
}

sigma(3);
sigma(5);

//factorial

function factorial(num)
{
	var factorial = 1;
	for(var i = 1; i < num + 1; i++)
	{
		factorial *= i;
	}
	console.log(factorial);
	return factorial;
}

factorial(3);
factorial(5);

function drawLeftStars(num)
{
	
	for(var i=1; i<num+1; i++)
	{
		console.log('*');
	}
}

drawLeftStars(5);

function drawRightStars(num)
{
	var space = 75 - num;
	for (var i=1; i<space+1; i++)
	{
		console.log(' ');
		
	}
	for (var j=space+1; j<space+num+1; j++)
	{
		console.log('*');
	}
}

drawRightStars(15);

function drawCenteredStars(num)
{
	var field = 75;
	var space = 75-num;
	var leftSpace = space/2;
	console.log('left')
	console.log(leftSpace)
	var rightSpace = space/2;

	for (var i=1; i<leftSpace+1; i++)
	{
		console.log(' ')
		
	}
	for (var j=leftSpace+1; j<leftSpace+num+1; j++)
	{
		console.log('*')
	}
	for (var k=leftSpace+num+1; k<field+1; k++)
	{
		console.log(' ')
		
	}
}

drawCenteredStars(6);


