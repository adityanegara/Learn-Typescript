"use strict";
function isMagicaldrome(inputString) {
    const countChar = (str) => {
        const counts = {};
        for (const s of str) {
            if (counts[s]) {
                counts[s]++;
            }
            else {
                counts[s] = 1;
            }
        }
        return counts;
    };
    const counted = countChar(inputString);
    console.log(counted);
    return 'a';
}
