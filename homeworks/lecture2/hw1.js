/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let temp = extend({}, p); // 把 p 的属性复制到一个空对象里
    return extend(temp, o) // 再把 o 的属性复制到 temp 上，同名的会覆盖, o 的优先级更高
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let prop in o) {
        if (!(prop in p)) {
            delete o[prop];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    return restrict(extend({}, o), p);
}

let o = {a:1, b:2};
let p = {b:999, c:3};

console.log(extend({...o},p));
console.log(union(o, p));  
console.log(restrict({...o}, p)); 
console.log(intersection(o, p));
/*
extend — 用 for...in 遍历 p 的可枚举属性，逐个赋值到 o 上，同名的自然就被覆盖了。
union — 先把 p 复制到空对象，再把 o 覆盖上去。这样同名属性保留的是 o 的值。
restrict — 遍历 o 的属性，如果 p 里没有同名的就 delete 掉，相当于只保留 o 和 p 的交集键。
intersection — 不能直接改 o，所以先浅拷贝一份 o，再对拷贝做 restrict。
这里 for...in 刚好只遍历可枚举属性（包括原型链上的），和题目要求的 "enumerable properties" 一致。如果只想要自身属性可以加 hasOwnProperty 判断，但题目没要求就不用管。
**/