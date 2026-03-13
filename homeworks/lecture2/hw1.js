/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for (let prop in p){ //走进对象p，得到每一个属性名
        o[prop] = p[prop] //如果是方括号，是把属性名放进来，如果是o.prop那么是找名字叫做prop的属性。
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    let res = {}; //这是一个新建的project，不是map
    for (let prop in p){
        res[prop] = p[prop]
    }
    for(let prop in o){
        res[prop] = o[prop]
    }
    return res;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for (let prop in o){
        if (!(prop in p){
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
    let res2 = {};
    for (let prop in o){
        if(prop in p){
            res2[prop] = o[prop]
        }
    }
    return res2;
}
