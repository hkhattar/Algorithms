console.log("mmmmmmkkkkkkkkk")

function generateCoinChange(cents)
{
	var dollar = Math.floor(cents/100);
	var h = Math.floor(cents%100/50);
	var q = Math.floor(cents%100%50/25);
	var n = Math.floor(cents%100%50%25/10);
	var d = Math.floor(cents%100%50%25%10/5);
	var p = cents - 100*dollar - 50*h - 25*q - 10*n - 5*d;

	console.log(cents + " cents can be represented by: " )
	console.log("dollars:   " + dollar);
	console.log("half-dollars:   "+ h);
	console.log("quarters:   " + q);
	console.log("dimes:   " + d);
	console.log("nickels:   " + n);
	console.log("pennies:   " + p);
}

generateCoinChange(294);



function swapPairs(array)
{
	var x = array.length;
	if (x%2!==0)
	{
		x = x-1;
	}
	for(var i=0; i<x; i=i+2)
	{
		var temp = a[i];
		a[i] = a[i+1];
		a[i+1]=temp;
	}
	console.log(array);
	return array;
}

a = [1,2,3,4,5]

swapPairs(a);

function removeDuplicates(arr)
{
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i]== arr[i+1])
		{
			for (var j=i; j<arr.length; j++)
			{
				arr[j] = arr[j+1]
			}
			i=i-1;
			arr.pop();
		}

	}
	console.log(arr);
	return arr;
}

b = [1,1,2,3,3,3,4,4,5,6,6,6,6]; 
removeDuplicates(b);

//another way of doing remove duplicates by using push method and creating a new array
function removeDups(arr)
{
	var newArr=[];
	newArr.push(arr[0])
	for (var i=1; i<arr.length; i++)
	{
		if (arr[i] !== arr[i-1])
		
		{
			newArr.push(arr[i]);
		}
	}
	console.log(newArr)
	return newArr;
}
c = [1,1,2,3,3,3,4,5,6,6,6,6]; 
removeDups(c);

// function mergeSortedArray(array_one, array_two)
// {
// 	var newArr = [];
// 	for (var i=0; i<array_one.length; i++)
// 	{
// 		// i = i-1;
// 		for (var j=0; j<array_two.length; j++)
// 		{
// 			// j=j-1
// 			if (array_one[i] < array_two[j])
// 			{
// 				newArr.push(array_one[i]);
// 				i = i+1;
			
// 			}
// 			else if (array_two[j] < array_one[i])
// 			{
// 				newArr.push(array_two[j]);
// 				j = j+1;

// 			}
// 		}
// 	}

// 	console.log(newArr);
// 	return newArr;
// }

// a = [1,4,6,8]
// b = [2,3,5,7]

// mergeSortedArray(a, b)



function mergeSortedArray(array_one, array_two)
{
	var newArr = [];
	var i=0;
	var j=0;

	while(i<array_one.length || j<array_two.length)
	{
		if(array_one[i] < array_two[j])
		{
			newArr.push(array_one[i]);
			i=i+1;
		}
		else if (array_two[j] < array_one[i])
		{
			newArr.push(array_two[j])
			j=j+1;
		}

		else if (i!==array_one.length)
		{
			newArr.push(array_one[i])
			i++;
		}
		else if (j!==array_two.length)
		{
			newArr.push(array_two[j])
			j++;
		}
		else
		{
			newArr.push(array_one[i]);
			i=i+1;
		}
	}
	console.log(newArr);
	return newArr;
}

a = [1,4,6,8,12,17]
b = [2,3,5,7,9,13,14,15]

mergeSortedArray(a, b)
