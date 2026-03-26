// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

/*  deep clone → 递归复制每一层
→ 循环引用会让递归无限循环
→ 需要记住"哪些对象已经 clone 过"
→ 用 Map 记录：原对象 → 克隆对象 （map.set）
→ 递归前先检查 Map，有就直接返回
→ 先存 Map 再递归，不然来不及记就又进去了
*/

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const map = new Map();
    const clone = (tar) => {
        if (typeof tar !== 'object' || tar  === null){
            return tar;
        }
        if (map.has(tar)){
            return map.get(tar);
        }
        const res = Array.isArray(tar) ? [] : {}; // 三元运算符的公式：条件 ? 条件为true的值 : 条件为false的值
        map.set(tar, res);
        
        // for...in 会把继承的属性也拿出来，hasOwnProperty 帮你过滤，只留自己的。
        // hasOwnProperty它检查一个属性是不是对象自己的，而不是从原型链继承来的。
        for (const key in tar){
            if (tar.hasOwnProperty(key)){
                res[key] = clone(tar[key]);
            }
        }
        return res;
    };
    return clone(obj);
}