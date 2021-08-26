let string = " ";
let hash = "#"
let space = " "
// let first = " " + "#" +" " +"#" +" " +"#" +" " +"#" +"\n";
// let second = "#" +" " +"#" +" " +"#" +" " +"#" +" " +"\n";
// let One = first.length;
// let Two = first.length + second.length;

for(let i = 0; i < 4; i++){
        if(string.length % 2 == 0){
                string += space;
        }else{
                string += hash;
        }
                string += "\n";
}

// for(let i=0;i<4;i++){
//     if (string.length%Two==0) {
//             string += first;
//     }
//     if(string.length%One==0){
//             string += second;
//     }
// }
console.log(string)