# PROBLEM SOLVING

### task: find the minimum in an array of numbers
	
#### Logic: 
1. Check every number of the array with a maximum number.
2. If the number that is being checked is less than maximum number then this is the minimum number.
3. Do the same for all the numbers in the array.

```
	const maximum = Inifinity
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] < maximum ) maximum = array[i]
	}
```

After the loop has finished, the variable minimum will contain the minimum number

### task: find the maximum in an array

#### Logic: 

similar to 'find the minimum' task. The only difference is that
1. now we should compare a number to a minimum number.
2. If the number that is being checked is greater than minimum number then this is the maximum number.
3. Do the same for all the numbers in the array.

```
	const maximum = Inifinity
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] < maximum ) maximum = array[i]
	}
```

After the loop has finished, the variable minimum will contain the minimum number

### task: find the minimum in an array of objects

#### Logic: the logic is identical with finding the minimum in an array of numbers.
the only difference that we need to select the specific key of the object that contains the desired number

```
	const maximum = Inifinity
	
	for (let i = 0; i < array.length; i++) {
		if (array[i].key < maximum ) maximum = array[i].key
	}
```

### task: find the maximum in an array of objects

#### Logic: 

the logic is identical with finding the minimum in an array of numbers.
the only difference that we need to select the specific key of the object that contains the desired number

```
	const minimum = Inifinity
	
	for (let i = 0; i < array.length; i++) {
		if (array[i].key > minimum ) minimum = array[i].key
	}
```

## ARRAYS

### task: how to loop an array (numbers, objects)

### task: how to choose an item from an array

#### Logic: Arrays are data structures where items are placed in an ordered way.
That means there is a first element, a 2nd, a last etc.
Syntax: arrayName[position in the array]
Length of an array is the total number of elements that it contains
N.B. The first element is at position 0. The 2nd element is at position 1 and so on
and the last element is at position array.length - 1.
E.g. An array has 10 elements. The last element is at position 9 (length of array is 10)
*******************************************************

### task: how to choose an item from an array that is nested into another array

A nested array is also called array of arrays.
It's just an array that contains arrays

They look like this:

```
const arrayOfArrays = [[1,2], [3, 4], [5, 6]]
```

#### Logic: 

Choose first the position of the nested array inside the array.

The array [1, 2] that is contained in the arrayOfArrays vaiable is a nested array.
It's the first item in that array.
So to select this array we have to type: arrayOfArrays[0]
in this array (the [1,2]) we can select the '1' like so: arrayOfArrays[0][0] and the '2' like so: arrayOfArrays[0][1]
