function largestSubgrid(grid, maxSum){

    function check(startI, startJ, stopI, stopJ){
        let sum = 0;
        for(let i = startI; i < stopI; i++){
            for(let j = startJ; j < stopJ; j++){
                sum += grid[i][j];
            }
        }
        return sum;
    }

    function square(square){
        let startI = 0,
            startJ = 0,
            stopI = square,
            stopJ = square,
            final = square - 1;

        for(let i = 0; i < grid.length - final; i++){
            for(let j = 0; j < grid.length - final; j++){
                let sum = check(startI, startJ, stopI, stopJ);
                if(sum == maxSum){
                    return {status: true, current: true};
                }else if(sum > maxSum){
                    return {status: true, current: false};
                }
                startJ += 1;
                stopJ += 1;
            }
            startI++;
            stopI++;
            startJ = 0;
            stopJ = square;
        }

        return false;
    }
    
    for(let i = 1; i <= grid[0].length; i++){
        let r = square(i);
        if(r.status && r.current){
            return i;
        }else if(r.status && r.current == false){
            return i - 1;
        }
    }

    return 0;
}

