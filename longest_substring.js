// Given a string, find the length of the longest substring without repeating characters.

/*
 * @param {string} s
 * @return {number}
 */

 function longestSubstring(aString) {
     let sub = '';
     let longestVal = '';
     for (let i=0; i < aString.length; i++){
         if(sub.includes(aString[i])){
             if(sub.length > longestVal.length){
                 longestVal = sub;
                 sub = aString[i];
             }
         } else {
             sub = sub+aString[i];
         }
     }
     console.log(`The answer is ${longestVal}, with the length of ${longestVal.length}`)
 }

 longestSubstring('pwwkew');

 //another solution with the use of hash sets -- totally need to check out this one!!!