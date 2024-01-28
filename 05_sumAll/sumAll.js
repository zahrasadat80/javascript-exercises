const sumAll = function(firstNum,lastNum) {
    if (typeof firstNum == 'number' && typeof lastNum == 'number'){
        if(firstNum >= 0 && lastNum >= 0){
            let sum = 0;
            if(firstNum>lastNum){
                for (i=lastNum; i<=firstNum; i++){
                    sum += i;
                }
            }else{
                for (i=firstNum; i<=lastNum; i++){
                    sum += i;
                    }  
            } 
            return sum; 
        }else{
            return 'ERROR';
        }
    }else{
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
