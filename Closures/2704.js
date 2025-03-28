/* To Be Or Not To Be 
 Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

-- Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".

-- Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.

*/


// ------ my submission resut -----------
// runrime : 40ms(80.19%)
// memory : 53.66(22.27%)


// description : 
/* in this problem you should return a object with two methods
 * if you want use normal nested list , you can call inner and outer function like this "expect(val).toBe(val)"*/

var expect = function (val) {
    return obj = {
        toBe: function (w) {
            if (val === w) {
                return true;
            }
            throw new Error("Not Equal")
        },
        notToBe: function (v) {
            if (val !== v) {
                return true;
            }
            throw new Error("Equal")
        },
    }
};

console.log(expect(1).toBe(1));

