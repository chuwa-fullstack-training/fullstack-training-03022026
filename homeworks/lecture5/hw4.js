// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
//output: 1 -> 2 
//answer: 1 -> 2 
//reason: The return value of a .then is passed to the next .then, and .catch only runs when an error occurs
/*
Promise.resolve(1)
   ↓
then → 打印 1 → 返回 2
   ↓
catch（跳过）
   ↓
then → 打印 2
*/

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });

//output: 1 -> 2 
//answer: 1 -> 3
//reason:  A rejected promise skips .then, goes to .catch, and the return value from .catch converts it back to fulfilled for the next .then
/*
Promise.reject(1)
   ↓
then（跳过）
   ↓
catch → 打印 1 → 返回 3（恢复为成功）
   ↓
then → 打印 3
*/

//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));

//output: 1 -> Error: 4 -> 3 -> Error: 2
//answer: Error: 2
//reason: Promise.all fails immediately on the first rejection and returns the error from the earliest rejected promise

