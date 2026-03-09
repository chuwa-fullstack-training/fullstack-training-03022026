/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {

  let solutionsFound = 0;
  
  // 50c 最多 2 枚 (2 * 50 = 100)
  for (let c50 = 0; c50 <= 2; c50++) {
    // 25c 最多 4 枚 (4 * 25 = 100)
    for (let c25 = 0; c25 <= 4; c25++) {
      // 5c 最多 20 枚 (20 * 5 = 100)
      for (let c5 = 0; c5 <= 20; c5++) {
        // 剩余的必须全是 1c 硬币
        let c1 = 48 - (c50 + c25 + c5);
        
        // 检查 c1 是否合法（不能为负数）
        if (c1 >= 0) {
          // 计算总价值（单位：分）
          let totalValue = (c50 * 50) + (c25 * 25) + (c5 * 5) + (c1 * 1);
          
          // 如果价值正好是 100 分
          if (totalValue === 100) {
            solutionsFound++;
            console.log(`方案 ${solutionsFound}: 50c=${c50}, 25c=${c25}, 5c=${c5}, 1c=${c1}`);
            
            // 找到 2 组后退出
            if (solutionsFound === 2) return;
          }
        }
      }
    }
  }
}

pickCoins();

