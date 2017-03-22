//1.print 0 to 10
for(var i=0;i<10;i++)
{
	console.log(i)
}

//2.swap function
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

//3.reorder the array so that even entries appear first, solve it without allocating additional storage
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




//4.BUBBLE SORT
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




//5.QUICK SORT
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









//6.DUTCH FLAG PARTITION
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


//7.PLUS ONE

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




//8.Multiply two arbitrary-precision integers
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



//9.palindrome

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

//10.intToString
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

//11.stringToInt
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

//12.Mohammed puzzle

function input(arr)
{
	var amount = 0
	for(var i=0; i<arr.length-1; i++)
	{
		for(var j=i+1; j<arr.length; j++)
		{
			if ((arr[i][0] == arr[j][0]) && (arr[i][2] == arr[j][2]))
			{
				arr[i][1] = arr[i][1] + arr[j][1]
				arr.splice(j, 1)
			}
		}		
	}
	
	console.log(arr,'arr')
}

arr= [['abc',25,'jan 16'],['xyz',25,'jan'],['xyz',25,'feb'],['abc',25,'jan 17'],['fgh',25,'jan'],['fgh',25,'jan'],['abc',25,'feb'],['abc',25,'feb'],['abc',25,'mar'],['fgh',25,'feb'],['fgh',25,'mar'],['xyz',25,'mar'],['xyz',25,'feb']]
input(arr)



//13.Searching
//Searching JavaScript arrays with a binary search
//search a sorted array for first occurence of k
//binary search 

function binaryIndexOf(list,searchElement)
{
	var minIndex = 0
	var maxIndex = list.length-1
	var result = -1
	var currentIndex 
	var currentElement 

	while (minIndex <= maxIndex)
	{
		currentIndex = Math.floor((minIndex+maxIndex) / 2)
		currentElement = list[currentIndex]
		
		if (searchElement > currentElement)
		{
			minIndex = currentIndex+1;
		}
		else if (searchElement == currentElement)
		{   
			result = currentIndex
			maxIndex = currentIndex-1
			
		}
		else if (searchElement < currentElement)
		{
			maxIndex = currentIndex-1;
		}
		
	}
	return result
}

var index = binaryIndexOf([2,3,3,23,23,23,23,23,23,23],23)
console.log('index',index)

//14.search a sorted array for entry equal to its index
//brute force approach
function searchEntryEqualTosItsIndex(array)
{
	for (var i=0; i<array.length; i++)
	{
		if (array[i]==i)
		{
			console.log('i',i)
			return i
		}
	}
}

var array = [-2,0,2,3,6,7,9]
searchEntryEqualTosItsIndex(array);

// 15.search a sorted array for entry equal to its index
// binary search tree
function binarySearchEntryEqualToItsIndex(array)
{
	var left=0;
	var right = array.length-1
	while(left<=right)
	{
		var mid = left + ((right-left)/2);
		var difference = array[mid] - mid;

		if(difference==0)
		{
			console.log(mid,'mid')
			return mid
		}
		else if (difference > 0)
		{
			right = mid-1
		}
		else 
		{
			left = mid+1
		}
	}
	return -1;
}

var array = [-2,0,2,3,6,7,9]
binarySearchEntryEqualToItsIndex(array)

//16.search a cyclically sorted array

function searchSmallest(array)
{
	var left=0
	var right=array.length-1

	while(left<right)
	{
		console.log('while start')
		var mid= Math.floor(left+((right-left)/2))
		if(array[mid]>array[right])
		{
			left=mid+1
		}
		else if (array[mid]==array[right])
		{
			console.log('right',right)

			return right
		}
		else
		{
			right=mid
		}
	}
	console.log('left',left)
	return left
}

var array = [378,478,550,631,103,203,220,234,279,368]
searchSmallest(array);


//17.brute force- square root
function squareRoot(number)
{
	for(var i=0; i<number; i++)
	{
		if ((number >= i*i) &&(number < (i+1)*(i+1)) )
		{
			console.log(i,'i')
			return i;
		}
	}
}

var number = 465897
squareRoot(number)

//18.binary search- compute the integer square root
function binarySearchSquareRoot(number)
{
	var left=0
	var right=number

	while(left<=right)
	{
		var mid = Math.floor(left+((right-left)/2))

		if (mid*mid>number)
		{
			right = mid-1
		}
		else if(mid*mid < number)
		{
			left = mid+1
		}
		else if (mid*mid == number)
		{
			console.log(mid,'mid')
			return left
		}
	}
	console.log('left-1',left-1)
}

var number = 37
binarySearchSquareRoot(number)

//19)14.1 compute intersection of two sorted arrays


function interSectTwoSortedArray(a,b)
{
	var x=0, y=0, ret =[] //initialize x=0, y=0 and newarray called ret

	while(x<a.length && y < b.length) //loop through both the arrays
	{
		if (a[x] == b[y])//if elements on x and y index are equal then push the element in newarray and increment both x and y
		{
			if (a[x-1]!=a[x])
			{
				ret.push(a[x]);
			}
			
			x++;
			y++;
		}

		else if (a[x]>b[y])//if element on y index is smaller, incrment y
		{
			y++;
		}

		else if (a[x]< b[y])//if element on x index in smaller, incrememt x
		{
			x++;
		}
	}

	console.log('ret',ret)
	return ret;
}

var a=[2,3,3,5,5,6,7,7,8,12],
b=[5,5,6,8,8,9,10,10]

interSectTwoSortedArray(a,b)

//20)14.2 merge two sorted arrays

function mergeTwoSortedArrays(A,m,B,n)//A and B are the arrays and m and n are number of entries initially in the first and second array respectively
{
	var a = m-1
	var b = n-1
	var write_idx = m+n-1

	while(a>=0 && b>=0)
	{
		A[write_idx--] = A[a]>B[b]? A[a--] : B[b--]
	}

	while(b>=0)
	{
		A[write_idx--] = B[b--]
	}

	console.log('A',A)
}

A= [5,13,17]
B=[3,7,11,19]
m=A.length
n=B.length
mergeTwoSortedArrays(A,m,B,n);

//21)14.3 Remove first name duplicates

function remove_duplicates_safe(arr) {
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i].split(',')[0] in seen)) {
            ret_arr.push(arr[i]);
            seen[arr[i].split(',')[0]] = true;
        }
    }
    console.log('return',ret_arr)
    return ret_arr;

}

var arr = ['Ian,Botham','David, Gower','Ian,Bell','Ian,Chappel']
remove_duplicates_safe(arr)
//output - ['Ian,Botham','David, Gower']

//22)5.8 reverse digits
function reverse (x)
{
	var result = 0
	var x_remaining = x
	// var x_remaining = abs(x)
	while(x_remaining)
	{
		console.log('inside while')
		console.log('before x_remaining',x_remaining)
		result = result*10 + x_remaining%10
		console.log('result',result)
		x_remaining = Math.floor(x_remaining/10)
		console.log('after x_remaining',x_remaining)
	}
	return x < 0? -result:result

}
var x = 1123;
console.log('x',x)
var r =reverse (x);
console.log('r',r)

//23) 5.9 check if a decimal integer is a palindrome
function isPalindromeNumber(x)
{
	console.log('start function')
	if (x<0)
	{
		return false;
	}
	var num_digits = x.toString().length;//to find total number of digits in that number
	var msd_mask = Math.pow(10,num_digits-1)
	for(var i=0; i<num_digits/2; i++)
	{
		if(Math.floor(x/msd_mask) != x%10)
		{
			return false
		}
		x = x%msd_mask
		x = Math.floor(x/10)
		msd_mask = Math.floor(msd_mask/100)
	}

	return true;
}

var x = 8923443298
var bool=isPalindromeNumber(x)
console.log('bool',bool)

//24)LINKED LIST- 8.1 merge two sorted list
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
    this.add = function (value){
    	var newNode = new Node(value)
    	var currentNode = this.head
    	if (!currentNode)
    	{
    		this.head = newNode
    		this._length++
    		return newNode
    	}
    	while (currentNode.next)
    	{
    		currentNode = currentNode.next
    	}
    	currentNode.next = newNode
    	this._length++
    	return newNode
    }

}


// console.log('L1',L1)
// console.log('L2',L2)

function mergeTwoList(L1,L2)
{
	console.log('inside mergeTwoList')
	console.log('L1',L1)
	console.log('L2',L2)

	if(L1==null){return L2}
	if (L2==null){return L1}
	var currentNode = new Node;

	if (L1.head.data < L2.head.data)
	{
		console.log('inside if')
		currentNode = L1.head
		console.log('currentNode',currentNode)
	}
	else
	{
		console.log('inside else')
		var temp = L2
		L2 = L1
		L1 = temp
		currentNode = L1.head
	}
	while(currentNode.next)
	{
		console.log('inside while')
		console.log('currentNode',currentNode)
		console.log('L2.head.data',L2.head.data)
		console.log('currentNode.next.data',currentNode.next.data)
		if(currentNode.next.data > L2.head.data)
		{
			console.log('if currentNode.next is greater than l2.head.data',currentNode.next.data,'>',L2.head.data)
			var temp = new Node
			temp = currentNode.next
			// L1=L2
			currentNode.next = L2.head
			L2.head = temp
			console.log('currentNode',currentNode)
			console.log('L2',L2)
		}
		currentNode = currentNode.next
		console.log('currentNode',currentNode)

	}
	console.log('currentNode',currentNode)
	if(currentNode.next == null)
	{
		currentNode.next = L2.head
		return L1
	}

	

}

var L1 = new SinglyList;
L1.add(3)
L1.add(5)
L1.add(7)
var L2 = new SinglyList;
L2.add(2)
L2.add(11)
console.log('L1',L1)
console.log('L2',L2)
var output = mergeTwoList(L1,L2)
console.log('output',output)



//25)Reverse a singly linked list
function reverseList(linkedList)
{
	var previous = null
	var current = linkedList.head
	var next 
	while(current)
	{
		next = current.next
		current.next = previous
		previous = current
		current = next
	}
	linkedList.head = previous
	console.log('linkedList',linkedList)
	return linkedList

}

var linkedList = new SinglyList;
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

reverseList(linkedList)

//26) 8.6 delete a node from a singly linked list
//write a program which deletes a node in a singly linked list. The input node is guaranted not to be the tail node

function deleteNode(L1,val)
{
	var currentNode = new Node;
	currentNode = L1.head

	while(currentNode.next.data != val)
	{
		currentNode = currentNode.next
	}

	currentNode.next = currentNode.next.next
	L1._length--
	console.log('L1',L1)
	return L1

}


var linkedList = new SinglyList;
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

deleteNode(linkedList,4)


//27) 8.7 delete the last node from the linked list

function pop(L1)
{
	var current = new Node;
	current = L1.head;
	var previous 

	while(current.next)
	{
		previous = current;
		current = current.next
	}

	previous.next = null;
	L1._length--
	console.log('L1',L1)
	return L1
}

var linkedList = new SinglyList;
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

pop(linkedList)

//28) 8.8 remove duplicates from the sorted list
function removeDuplicates(L1)
{
	var current = new Node;
	current = L1.head
	console.log('current before while',current)

	while(current.next!=null)
	{
		console.log('inside while')
		console.log('current',current)
		if (current.data == current.next.data)
		{
			current.next = current.next.next
			L1._length--
		}
		else
		{
			current = current.next
		}
		
	}
	console.log('L1',L1)
	return L1
}

var linkedList = new SinglyList;
linkedList.add(2)
linkedList.add(2)
linkedList.add(3)
linkedList.add(5)
linkedList.add(7)
linkedList.add(11)
linkedList.add(11)

console.log(')))))))))))))))))))))))')
removeDuplicates(linkedList)



//reverse a linked list
// function reverseList(linkedList)
// {
// 	var previous = linkedList.head
// 	var current = linkedList.head.next
// 	var next = linkedList.head.next.next
// 	console.log('previous',previous)
// 	console.log('current',current)
// 	console.log('next',next)

// 	while(next.next!=null)
// 	{
// 		console.log('inside while next.next exists')
// 		console.log('next.next',next.next)
// 		console.log('linkedList.head',linkedList.head)
// 		linkedList.head.next = current.next
// 		console.log('current.next before 3',current.next)
// 		current.next = previous
// 		console.log('current.next after 1',current.next)
// 		console.log('current.next 1',current.next)
// 		console.log('linkedList.head',linkedList.head)
// 		console.log('previous before',previous)
// 		previous = current
// 		console.log('previous after',previous)
// 		console.log('current before',current)
// 		current = next
// 		console.log('current after',current)
// 		console.log('next before',next)
// 		next = next.next
// 		console.log('next after', next)
// 	}
// 	console.log('current',current)
// 	console.log('*************')
// 	// next.next = current
// 	// linkedList.head = next
// 	// console.log('linkedList.head',linkedList.head)
// 	// return linkedList.head

// }





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

