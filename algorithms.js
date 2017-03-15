//print 0 to 10
for(var i=0;i<10;i++)
{
	console.log(i)
}

//swap function
function swap(a,b)
{
	var temp = a;
	a = b;
	b = temp;
	// console.log('a',a);
	// console.log('b',b);
}

var a = 7;
var b = 8;

swap(a,b);



array = [2,8,7,4,3,5]
array = [6,4,9,3,8,7]

//reorder the array so that even entries appear first, solve it without allocating additional storage
function evenOdd(array)
{
	console.log(array)
	var even = 0;
	var odd = array.length-1;
	var i = 0;

	while( even !== odd )
	{
		if (array[i]%2 == 0)
		{
			even = i;
			i++;
		}
		else
		{
			var temp = array[i];
			array[i] = array[odd];
			array[odd]=temp;
			odd--;
		}
	}
	console.log(array)
}

evenOdd(array);




//BUBBLE SORT
function bubbleSort(a)
{
	for(var i=0; i<a.length-1; i++)
	{
		var flag = 0;
		for(var j=0; j<a.length-i-1; j++)
		{
			if (a[j] > a[j+1])
			{
				var temp = a[j];
				a[j] = a[j+1];
				a[j+1] = temp;
				flag++
			}
		}

		if (flag == 0) // exit out of function if it is already ordered 
		{
			break;
		}
	}
	console.log('array',a)
}

arr = []//initialize array
console.log(Math.floor(Math.random() * 99)) // random number between 0 to 99

//generate array of length thousand by using for loop
for(var i=0; i<1000; i++)
{
	arr.push(i); // if we push i, it will be ordered array but if we push random number calculated above then it will be unordered array
}

console.log(arr)// array of length 1000

var t0 = performance.now();
bubbleSort(arr); //call the bubble sort to make it ordered
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")




//QUICK SORT
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

// first call
var items = [4,2,6,5,3,9]
console.log('items', items)
var result = quickSort(items);

console.log('result',result)









//DUTCH FLAG PARTITION
function dutchFlagPartition(items,x) {

    smaller = typeof smaller != "number" ? 0 : smaller;
    equal = typeof equal != "number" ? 0 : equal;

    larger = typeof larger != "number" ? items.length  : larger;

        var pivot = items[x]
        i       = equal,
        j       = smaller,
        k		=larger;


        console.log('smaller',smaller)
        console.log('equal',equal)

    while (equal < larger) {

       if (items[equal] < pivot){
       	swap(items,smaller++,equal++)
       }
       else if(items[equal] == pivot){
       	++equal;
       	        console.log('equal',equal)

       }
       else {
       	swap(items,equal,--larger)
       }
    }
    console.log('items after algorithm', items)

    return items;
}

var items = [7,2,6,5,3,5,8,9,4,5,2,4,1,9,3,5]
console.log('items dutch', items)
dutchFlagPartition(items, 3) 


//PLUS ONE

function plusOne(a)
{
	a[a.length-1] = a[a.length-1] +1;

	for(var i = a.length -1; i>0 && a[i]==10; i--)
	{
		a[i] = 0;
		a[i-1]++
	}

	if(a[0]==10)
	{
		a[0]=0;
		a.unshift(1)
	}

	console.log('a',a)
	return a;
}

var a = [9,9,9]

plusOne(a)




//Multiply two arbitrary-precision integers
var result = []
console.log('result',result)
function multiply(num1,num2)
{
	var sign ;
	if((num1[0] < 0 && num2[0] > 0 ) ||  (num1[0] > 0 && num2[0] < 0 ))
	{
		
		sign = -1
	}
	else
	{
		sign = 1
	}
	num1[0] = Math.abs(num1[0])
	num2[0] = Math.abs(num2[0])

	

	for(var i=num1.length -1; i>=0; --i)
	{	
		console.log('result',result)

		for(var j=num2.length-1; j>=0; --j)
		{
			
			console.log(i,j)
			
			if (isNaN(result[i+j+1] ) )
			{
				result[i+j+1] = 0

			}
			
			console.log('result[i+j+1]',result[i+j+1])
			result[i+j+1] =  result[i+j+1] + num1[i] * num2[j]
			 
			console.log('result[i+j+1]',result[i+j+1])
			result[i+j] = result[i+j] + result[i+j+1]/10
			result[i+j+1] =  result[i+j+1]%10
			console.log('result[i+j+1]',result[i+j+1])
		}
	}
	

	console.log('result',result)
	return result
	
}


num1 = [1,2]
num2 = [7]

multiply(num1,num2);



//palindrome

function palindrome(str)
{
	var x=str.length-1
	var bool = false;
	for(var i=0; i<x; i++)
	{

		if (str[i] == str[x-i])
		{
			bool = true	
		}
		
		else 
		{
			bool = false
			console.log(bool)
			return false	
		}
	}
	console.log(bool)
}

var str = 'wpkjoobllboopw'
palindrome(str);

//intToString
function intToString(int)
{
	var s;
	var a=int%10
	s = '0' + (int-a)/10;
	s = s+int%10
	console.log(s)
	console.log(typeof(s))
}

intToString(000987)

//stringToInt
function stringToInt(s)
{
	var x=0;
	for(var i=0; i<1; i++)
	{
		x=s[i]
	}
	for(var i=1; i<s.length; i++)
	{
		x = x*10 
		x = x + s[i]*1
	}
	console.log(x)
}

stringToInt('2346574')

//stringToInt
// function stringToInt(string)
// {
// 	var x=0;
// 	for(var i=0; i<string.length; i++)
// 	{
// 		for(var j=100; j>1; j=j/10)
// 		{
// 			console.log(i,'i')
// 			console.log(x,'x')
// 			console.log(j,'j')
// 			x = x + string[i]*j
// 			console.log(x,'x after' )

// 		}
		
// 	}
// 	console.log(x)
// }




//DUTCH FLAG PARTITION
// function dutchFlagPartition(items,x) {

//     left = typeof left != "number" ? 0 : left;
//     right = typeof right != "number" ? items.length - 1 : right;

//         var pivot = items[x]
//         i       = left,
//         j       = right;

//         console.log('left',left)
//     while (i <= j) {

//         while (items[i] < pivot) {
//             i++;
//         }

//         while (items[j] > pivot) {
//             j--;
//         }

//         if (i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     console.log('items after algorithm', items)

//     return items;
// }

// var items = [5,2,6,5,3,5]
// console.log('items dutch', items)
// dutchFlagPartition(items, 3) 

//quick sort


// function swap(items, firstIndex, secondIndex){
//     var temp = items[firstIndex];
//     items[firstIndex] = items[secondIndex];
//     items[secondIndex] = temp;
// }

// function partition(items, left, right)
// {
// 	console.log('items before',items)
// 	// if (left == undefined)
// 	// {
// 	// 	var left = 0
// 	// }
// 	// if (right == undefined)
// 	// {
// 	// 	var right = items.length - 1;
// 	// }
	
	
// 	var pivot = Math.floor(items.length/2)
// 	var i = left
// 	var j = right


// 	while(i<j)
// 	{
// 		while(items[i] < items[pivot])
// 		{
// 			i++
// 		}

// 		while(items[j] > items[pivot])
// 		{
// 			j--
// 		}

// 		if (items[i] > items[j])
// 		{
// 			swap(items, i, j)
// 			i++
// 			j--
// 		}

// 	}

// 	console.log('i',i)
// 	console.log('items', items)
// 	return i;


// }


// partition(items);

// function quickSort(items,left,right)
// {
// 	var index;

//     if (items.length > 1) {

//         index = partition(items, left, right);

//         if (left < index ) {
//             quickSort(items, left, index );
//         }

//         if (index + 1 < right) {
//             quickSort(items, index+1, right);
//         }

//     }

//     return items;
// }


// var result = quickSort(items, 0, items.length - 1);
// console.log('result',result)

