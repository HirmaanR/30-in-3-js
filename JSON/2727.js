/*
2727. Is Object Empty

Easy
Companies
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 

--- Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

--- Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 

Constraints:

obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 105
 
*/



// ------ my submission resut -----------
// runrime : 33ms(66.86%)
// memory : 53.67(45.20%)


var isEmpty = function(obj) {
    let result = JSON.stringify(obj);
    if(result==="[]" || result==="{}"){
        return true;
    }
    return false;
};