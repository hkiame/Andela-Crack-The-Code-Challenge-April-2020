function subSequence(arr){
    let output = [],
    min = Math.min(...arr),
    start = arr.indexOf(min);

    for(let i = start; i < arr.length; ){
        let r = arr.splice(start, 1);
        if(arr.includes(r[0])){
            if(output.length == 0){
                output.push(r[0]);
            }else if(output.length != 0 && output[output.length - 1] <= r[0]){
                output.push(r[0]);
            }else if(output.length != 0 && output[output.length - 1] >= r[0]){
                output.push(r[0]);
            }

            while(arr.includes(r[0]) && (arr.indexOf(r[0]) != arr.lastIndexOf(r[0]))){
                output.push(r[0]);
                arr.splice(arr.indexOf(r[0]), 1);
                
            }
        }
    } 

    if(output.length > 1){
        return output;
    }
        
    return [-1];
}