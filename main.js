/* 
👉 Write your kata here!

    Write a function that takes in two arrays and returns an array without any elements found in the second array.
    
    [1,2,3,4], [1,2,3] should return [4]
    ["apples", "bananas", "grapes"], ["kiwi", "pears"] should return ["apples", "bananas", "grapes"]
    [1,2,3], [1,2,3] should return []

    Cipher/Encryption function??

*/

//👉 Write the function your CodeWarriors will start with below here:


//Solution

export function matchArrays(arr1, arr2) {
    // Define empty array
    const arr3 = [];
    // Loop through first array
    for (let i = 0; i < arr1.length; i++) {
        //If item is not found in 2nd array, add it to arr3
        if (!arr2.includes(arr1[i])) {
            arr3.push(arr1[i])
        }
    }
    //Return the new array
    return arr3;
}