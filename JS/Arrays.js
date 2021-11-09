/**
 * ARRAYS
 */

/**
 *  Task: Create an empty array
 */

const someArrayName = []

/**
 *  Task: Create an array with numbers
 */

const someArrayName = [1, 2, 3, 4]

/**
 *  Task: Create an array with with booleans
 */

const someArrayName = [true, false, false, true]

/**
 * Task: Create an array with with strings
 */

const someArrayName = ['alkis', 'john', 'day', 'night']

/**
 * Task: find the index of an item in an array
 * 
 * If one needs has a single value (number, string etc) to find the index of it in an array,
 * the easiest solution is with indxOf
 */

const index = array.indexOf(value)

// In case an object is given, then the findIndex could be more appropriate

const index = array.findIndex(item => item === 5)

/**
 * Task: Delete an item from an array
 * 
 * Depends on the way one will chose to delete an item from an array.
 * Using the splice method, it means that the index (position) 
 * of the item in the array will be needed.
 * 
 * splice method returns the deleted array
 * N.B. the array gets mutated (changed)
 * If the index of the item is not known then it needs to be found.
 */

array.splice(indexOfItemToBeDeleted, howManyItemsToBeDeleted)


/**
 * task: add in item to an array
 */

array.push(item)

/**
 * task: add an item to an array of objects
 */

array.push({a: 1, b:2})

/**
 * task: find the minimum in an array of numbers
 * 
 * Logic: 
 * 1. Check every number of the array with a maximum number.
 * 2. If the number that is being checked is less than maximum number then this is the minimum number.
 * 3. Do the same for all the numbers in the array.
 * 
 * After the loop has finished, the variable minimum will contain the minimum number
 */
	
const maximum = Inifinity

for (let i = 0; i < array.length; i++) {
	if (array[i] < maximum ) maximum = array[i]
}

/**
 * task: find the maximum in an array
 * 
 * Logic: 
 * similar to 'find the minimum' task. The only difference is that
 * 1. now we should compare a number to a minimum number.
 * 2. If the number that is being checked is greater than minimum number then this is the maximum number.
 * 3. Do the same for all the numbers in the array.
 * 
 * After the loop has finished, the variable minimum will contain the minimum number
 */

const minimum = -Inifinity

for (let i = 0; i < array.length; i++) {
	if (array[i] < minimum ) minimum = array[i]
}


/**
 * task: find the minimum in an array of objects
 * 
 * Logic: the logic is identical with finding the minimum in an array of numbers.
 * the only difference that we need to select the specific key of the object that contains the desired number
 */

const maximum = Inifinity

for (let i = 0; i < array.length; i++) {
	if (array[i].key < maximum ) maximum = array[i].key
}

/**
 * task: find the maximum in an array of objects
 * 
 * Logic: 
 * 
 * the logic is identical with finding the minimum in an array of numbers.
 * the only difference that we need to select the specific key of the object that contains the desired number
 */

const minimum = -Inifinity

for (let i = 0; i < array.length; i++) {
	if (array[i].key > minimum ) minimum = array[i].key
}


/**
 * UNDER DEVELOPMENT
 */

// ### task: find a max in an array which is inside an object with array

// task: sort an array
// task: sort an array with objects

// find index
// find which
// find the sum


// Task: Find index of an array item.

// syntax: array.findIndex( function to find the item*: e.g. item =>)

// it depends on what we know about the item:

// 1) an object is given

// Arrays with objects filter, map reduce