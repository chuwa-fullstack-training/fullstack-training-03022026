// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const seen = new Map();

    const dfs = (obj) =>{
        if(obj===null || typeof obj!== 'object') return obj;

        if(seen.has(obj)) return seen.get(obj);

        const copy={};
        seen.set(obj,copy);

        for(const key in obj){
            copy[key]=dfs(obj[key]);
        }
        return copy;
    }
    return dfs(obj);
}