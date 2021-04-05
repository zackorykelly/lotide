# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zackorykelly/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array (in string format).
* `middle(array)`: Returns the middle element of the array, middle 2 elements if length is even.
* `tail(array)`: Returns all elements after the first element of an array.
* `countLetters(string)`: Returns an object with a count of instances for each letter eg {a: 5, b:2} with non occuring letters being undefined.
* `countOnly(array, object)`: Counts only the items in an array that are defined as true in the input object eg {Zack: true, banana: false, Kelly: true} will count instances of Zack and Kelly in the array but not instances of banana or any other item.
* `findKey(object, callback)`: Returns the first key that returns true when its value is passed into the callback function.
* `findKeyByValue(object, valueToFind)`: Returns the first key who's value matches the input value.
* `flatten(array)`: Returns an array with all elements un-nested eg [[1], [2, [3]] becomes [1, 2, 3].
* `letterPositions(string)`: Returns an object with an array for each occuring letter with the indexed positions of that letter. 
* `map(array, callback)`: Creates an array that contains the result of the callback function's output for each value in the original array.
* `taleUntil(array, callback)`: Returns an array of items added 1 at a time from original array until a value returns true when passed to callback function.
* `without(array, itemsToRemove)`: Returns an array of all the values in input array that do not match values in itemsToRemove.