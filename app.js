//question 1
new Set([1,1,2,2,3,4]) // 1,2,3,4

//question 2
// [...new Set("referee")].join("") // ref

//question 3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !==arr.length


//vowelCount
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1 || 1);
      }
    }
  
    return vowelMap;
  }