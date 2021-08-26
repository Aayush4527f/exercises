const para = document.getElementById("para");
const input = document.getElementById("input");





let array = [];
function add(entry) {
    array.push(entry);
    console.log(array)
    console.log(input.value)
    
}
function remove() {
    console.log(array)
    array.pop();
}
function emergency(entry) {
    console.log(array)
    array.unshift(entry)
}
function emergencyRemove() {
    console.log(array)
    array.shift()
}



// add(input.value)