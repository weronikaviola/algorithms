var lengthOfLongestSubstring = function (s) {
    debugger;
    let theLongest = '';
    let tempLongest = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (tempLongest.includes(char)) {
            let tempIdx = tempLongest.indexOf(char);
            theLongest = tempLongest;
            tempLongest = tempLongest.slice(tempIdx + 1)
        }
        tempLongest += s[i];
    }
    return theLongest.length > tempLongest ? theLongest : tempLongest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));