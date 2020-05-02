function maxSubsequence(n, k, arr){
    let r = [],
        len = arr.length;
    for(let i = 0; i < len; i++){
        if(r.length > 0 && ((arr[i] ^ r[r.length-1]) == k)){
            r.push(arr[i]);
        }else if(((i + 2) < len) && ((arr[i] ^ arr[i+2]) == k) && r.length == 0){
            r.push(arr[i], arr[i+2]);
            i++;
        }
        
        if(r.length == 0){
            for(let j = 1; j < len; j++){
                if((arr[i] ^ arr[j]) == k){
                    r.push(arr[i], arr[j]);
                    i = j;
                    break;
                }
            }
        }
        if(r.length == 0){
            let key = arr[i] ^ k;
            if(arr.includes(key)){
                let index = arr.indexOf(key);
                r.push(arr[i], key);
                i = index + 1;
            }
        }else if((arr[i] ^ r[r.length-1]) == k){
            r.push(arr[i]);
        }
    }

    if(r.length > 1){
        return r.length;
    }

    return 1;
    
}

