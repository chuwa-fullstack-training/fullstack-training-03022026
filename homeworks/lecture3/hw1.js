/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let count = 0;
    
    for (let x = 0; x <= 48; x++) {
        for (let y = 0; y <= 48; y++) {
            for (let z = 0; z <= 48; z++) {
                let n = 48 - x - y - z;
                if (n >= 0 && (x + 5*y + 25*z + 50*n === 100)) {
                    count ++;
                    console.log(x, y, z, n);
                }
                if (count === 2) {
                    return
                }
            }
        }
    }
}
pickCoins();
