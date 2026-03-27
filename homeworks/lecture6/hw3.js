/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
// setTimeout(() => func(), delay); clearTimeout(timer);

// func.apply 做两件事：调用函数 + 指定 this。
// 为什么要用 apply 而不是直接 func()？因为 debounce 返回的是一个新函数，要把调用时的 this 和参数原封不动地传给原函数
function debounce(func, delay) {
  let timer; // undefined, 可以后面赋值
  return function (...args){
    clearTimeout(timer); // 1. 清掉旧的
    timer = setTimeout(() => { // 2. 设新的
      func.apply(this, args);
    }, delay);
  };
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
/**
%Throttle 思考链路
```
固定间隔才执行一次 → 需要知道距离上次多久了
→ 记录上次执行时间 → lastTime
→ Date.now() - lastTime >= delay → 执行
→ 否则忽略
 */
function throttle(func, delay) {
  // your code here
  let lastTime = 0;
  return function (...args){
    const now = Date.now();
    if (now - lastTime >= delay){ // 过了足够久
      func.apply(this, args);       // 执行
      lastTime = now;               // 更新上次执行时间
 };
} 
}
/**  
func(...args)` 和 `func.apply(this, args)` 的区别**非常小**，99% 的面试场景下 `func(...args)` 完全够用。

## 你现在只需要记住
```
func(...args) = 调用 func，把参数传进去
*/