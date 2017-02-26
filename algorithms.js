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





//quicksort
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
var result = quickSort(items);

console.log('result',result)















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

var items = [4,2,6,5,3,9]
console.log('items', items)
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

