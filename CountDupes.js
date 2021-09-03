const counts = {};
const sampleArray = ['a', 'a', 'b', 'c','fas','fas'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

// this is a stackoverflow code
// how is it printing the string with how many times it has appeared
// also it can ony count duplicate strings 
// and it doesnt matter whether counts is array or a object