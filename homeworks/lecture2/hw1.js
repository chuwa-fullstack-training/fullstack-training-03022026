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

// test 1
// let o = { id:1 };
// let p = { age:4, name:'yay'};
// console.log(extend(o, p));

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let z = new Object();

    // Copy p first, cuz 'If o and p have properties by the same name, the values from o are used.'
    for (let property in p) {
        z[property] = p[property];
    }
    for (let property in o) {
        z[property] = o[property];
    }
    return z;
}
// test 1
// let o = { id:1 };
// let p = { age:4, name:'yay'};
// console.log(union(o, p));

// test 2
// let o2 = { name: "Lin", id: 1 };
// let p2 = { name: "Tom", age: 4 };
// console.log(union(o2, p2));

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let property in o){
        if (!(property in p)){
            delete o[property];
        }
    }
    return o;
}

// test 3
// let o = { id: 1, name: 'Lin', age: 3 };
// let p = { id: 10, name: 'Tom' };
// console.log(restrict(o, p));

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let z = new Object();

    for (let property in o){
        if (property in p){
            z[property] = o[property]
        }
    }
    return z;
}
// test 4
// let o = { id: 1, name: 'Lin', age: 3 };
// let p = { id: 10, age: 3, num: 8 };

// let result = intersection(o, p);

// console.log("o =", o);
// console.log("result =", result);