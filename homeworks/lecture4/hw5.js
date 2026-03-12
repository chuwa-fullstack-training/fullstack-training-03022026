// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here 不会
    // Use regular Map as WeakMap doesn't work with primitive keys
    const visited = new Map();
    
    const clone = (value) => {
        // Handle primitive types and null
        if (value === null || typeof value !== 'object') {
            return value;
        }
        
        // If we've already cloned this object, return the cached clone
        if (visited.has(value)) {
            return visited.get(value);
        }
        
        // Create a new object or array based on the type
        let clonedValue;
        
        // Handle Date objects
        if (value instanceof Date) {
            clonedValue = new Date(value);
        }
        // Handle RegExp objects
        else if (value instanceof RegExp) {
            clonedValue = new RegExp(value);
        }
        // Handle Map objects
        else if (value instanceof Map) {
            clonedValue = new Map();
            visited.set(value, clonedValue);
            value.forEach((val, key) => {
                clonedValue.set(clone(key), clone(val));
            });
            return clonedValue;
        }
        // Handle Set objects
        else if (value instanceof Set) {
            clonedValue = new Set();
            visited.set(value, clonedValue);
            value.forEach(val => {
                clonedValue.add(clone(val));
            });
            return clonedValue;
        }
        // Handle arrays and plain objects
        else {
            clonedValue = Array.isArray(value) ? [] : {};
        }
        
        // Store the clone in Map before processing properties
        visited.set(value, clonedValue);
        
        // Recursively clone all properties
        Reflect.ownKeys(value).forEach(key => {
            clonedValue[key] = clone(value[key]);
        });
        
        return clonedValue;
    };
    
    return clone(obj);
};

// Test with different data types
const complexData = {
    name: 'foo',
    date: new Date(),
    regex: /test/gi,
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
    child: null
};
complexData.child = complexData; // Circular reference

const clonedComplex = cloneDeepWithLoopAlt(complexData);
console.log('Complex data cloned:', clonedComplex);
console.log('Circular preserved:', clonedComplex.child === clonedComplex); // true
