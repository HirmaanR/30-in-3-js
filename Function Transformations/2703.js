/*
2703. Return Length of Arguments Passed

Easy
Companies

Write a function argumentsLength that returns the count of arguments passed to it.
 

-- Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.

-- Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
 

Constraints:

args is a valid JSON array
0 <= args.length <= 100
*/


// ------ my submission resut -----------
// runrime : 37ms(87.22%)
// memory : 53.90(14.51%)

var argumentsLength = function(...args) {
    var sum = 0;
    for(arg of args) sum += 1
    return sum;
};

