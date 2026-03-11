// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

/***
 * WeakMap() -- recording the object that has been cloned
 * set(key, value)
 * get(key)
 * has(key)
 * delete(key)
 * 
 * Diff from Map, WeakMap's key must be object, not string, number, boolean
 * 
*/

const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
    // Implement the function here
    // Deep clone is meaningful only for object/array
    // In JavaScript, typeof null === "object", so we need to add the condition
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    // Check if the object has been cloned
    if(map.has(obj)) {
        return map.get(obj);
    }

    // If obj is an array, create []; otherwise create {}
    const copy = Array.isArray(obj) ? [] : {};
    // Store the mapping from the original object to its clone
    // This is important for handling circular references
    map.set(obj, copy);

    // Recursively clone each property
    for (let key in obj) {
        copy[key] = cloneDeepWithLoop(obj[key], map);
    }
    return copy;
}


const data = {
    name: 'foo',
    child: null
};
data.child = data;

const cloned = cloneDeepWithLoop(data);

console.log(cloned !== data); // true
console.log(cloned.name); // "foo"
console.log(cloned.child === cloned); // true
console.log(cloned.child === data); // false