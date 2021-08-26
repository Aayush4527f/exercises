let isEven = function checkEven(num) {
    if(Math.sign(num)==1){
        if(num-2==0){
            output="true"
        }else if(num-2==1){
            output = "false"
        }else{
            num = num-2;
            isEven(num)
        }
    }else if(num == 0){
        output="true"
    }
    else{
        output = "??"
    }
    return output
}
console.log(isEven(-1))