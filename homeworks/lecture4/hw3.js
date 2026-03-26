/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

/** 
多次 new 要同一个对象
→ 构造函数可以 return 对象来"劫持" new
→ 那就需要把第一次的实例存起来
→ 存在哪？闭包 or 静态属性
→ 加个 if 判断，有就 return，没有就存
 */
//如果没有 Singleton，每次 new 都会创建独立的对象，它们之间数据不共享，就达不到"全局唯一"的效果。
// your code here
//======ES5======
var Singleton = (function() {
    var instance;
    function Singleton(){
        if (instance){
            return instance;
    }
    this.time = new Date();
    instance = this;
    }
    return Singleton;
}) ();

//======ES6======
class SingletonES6 {
    // 这里写 constructor 不是为了初始化属性，而是为了拦截 new 的过程，让它在特定条件下返回旧对象而不是创建新对象。这个"拦截"逻辑只有 constructor 里能做。
    constructor(){
        if (SingletonES6.instance){
            return SingletonES6.instance;
        }
        this.time = new Date();
        SingletonES6.instance = this;
    }

}
const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true

const c = new SingletonES6();
const d = new SingletonES6();
console.log(c === d);