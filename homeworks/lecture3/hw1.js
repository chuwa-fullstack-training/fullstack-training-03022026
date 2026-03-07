/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let count = 0;
    for(let a=0;a<=48;a++){
        for(let b=0;b<=48-a;b++){
            for(let c=0;c<=48-a-b;c++){
                let d = 48-a-b-c;
                if((50*a+25*b+5*c+d)===100){
                    console.log(`50c: ${a}, 25c: ${b}, 5c: ${c}, 1c: ${d}`);
                    count+=1;
                    if(count==2){
                        return;
                    }
                }
            }
        }
    }
}
