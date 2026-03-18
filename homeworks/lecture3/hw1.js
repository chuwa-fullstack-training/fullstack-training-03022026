/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let cnt = 0;
    for (let d = 0; d <= 2; ++d) {
        for (let c = 0; c <= 4; ++c) {
            for (let b = 0; b <= 20; ++b) {
                let a = 48 - d - b - c;
                if (a < 0) {
                    continue;
                }
                if (a + 5 * b + 25 * c + 50 * d === 100) {
                    console.log(a, b, c, d);
                    cnt++;
                }
                if (cnt === 2) {
                    return;
                }
            }
        }
    }
}
