function predictAnswer(stockData, queries){
    let result = [],
        min = Math.min(...stockData),
        stockLen = stockData.length;
    for(let i = 0; i < queries.length; i++){
        let stockIndex = queries[i] - 1,
            current = stockData[stockIndex],
            backTrack = stockIndex,
            forwardTrack = stockIndex,
            flag = true;
        if(current <= min){
            result.push(-1);
            continue;
        }
        
        do{
            if(backTrack > 0){ backTrack--; };
            if(stockData[backTrack] < current){
                result.push(backTrack += 1);
                flag = false;
                break;
            }
            if(forwardTrack < stockLen){ forwardTrack++; }
            if(stockData[forwardTrack] < current){
                result.push(forwardTrack += 1);
                flag = false;
                break;
            }
        }while(flag);

    }

    return result;
}


