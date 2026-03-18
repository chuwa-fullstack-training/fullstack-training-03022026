/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let property in p) {
        o[property] = p[property];
    }
    return o;
}

// test 
// let o = {a: 1};
// let p = {a: 2, id: 3, name: 'alice'};
// console.log(extend(o, p));

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let op = {};
    for (let property in p) {
        op[property] = p[property];
    }
    for (let property in o) {
        op[property] = o[property];
    }
    return op;
}

// test
// let o = {id: 1, name: 'abc'};
// let p = {id: 2, age: 3};
// console.log(union(o, p));

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let property in o) {
       if (!(property in p)) {
            delete o[property];
       }
    }
    return o;
}

// test
// let o = {a: 1, b: 200, c: 3};
// let p = {a: 3, b: 2};
// console.log(restrict(o, p));

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let op = {};
    for (let property in o) {
        if (property in p) {
            op[property] = o[property];
        }
    }
    return op;
}

// test
// let o = {a: 1, b: 2, c: 'alice'};
// let p = {a: 2, c: 'zh'};
// console.log(intersection(o, p));