let string = "";
let first = " " + "#" +" " +"#" +" " +"#" +" " +"#" +"\n";
let second = "#" +" " +"#" +" " +"#" +" " +"#" +" " +"\n";
for(i=0;i<4;i++){
    if (string.length%18==0) {
            string += first;
    }
    if(string.length%9==0){
            string += second;
    }
}
console.log(string)