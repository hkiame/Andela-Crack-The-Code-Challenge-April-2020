function minCans(used, total){
    let len = total.length,
        c = 0;
    total.sort((a, b)=>{return b - a;});
    let sum = used.reduce((acc, cur)=>{
        return acc + cur;
    });
    

    for(let i = 0; i < len; i++){
        if(sum <= 0){
            break;
        }
        sum -= total[i];
        c++;
    }

    return c;
}
