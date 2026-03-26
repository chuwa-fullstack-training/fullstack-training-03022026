/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let solutions = 0;
    for (let a =0; a <= 2 && solutions < 2; a++){
        for (let b = 0; b <= 4 && solutions < 2; b++) {
            for (let c = 0; c <= 20 && solutions <2; c++){
                let d = 48 - a - b- c;
                if (d >= 0 && a * 50 +b * 25 + c * 5 + d * 1 === 100) {
                    console.log(`50c: ${a}, 25c: ${b}, 5c: ${c}, 1c:${d}`);
                    solutions += 1;
    
                }
            }
        }
    }
}
pickCoins();

// recursion
function pickCoins() {
    const coins = [1, 5, 25, 50];
    let solutions = 0;
    function dfs(idx, remain, numC, chosen){
        if (remain === 0 && numC ===48){
            console.log(`50c: ${chosen[3]}, 25c: ${chosen[2]}, 5c: ${chosen[1]}, 1c: ${chosen[0]}`);
            solutions += 1;
            return;
        } 
        if (remain <= 0 || numC >- 48 || idx >= coins.length){
            return;
        }
        let maxC = Math.min(
            Math.floor(remain / coins[idx]),
            48 - numC
        );
        for (let i =0; i <= maxC; i ++){
            chosen[idx] = i;
            dfs(idx +1, remain - i*chosen[idx], numC + i, chosen);
        }
    }
    dfs(0, 100, 0, [0,0,0,0])


}
pickCoins();