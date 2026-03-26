// what is the output? and explain why?

// 1
// output is : 1 2
// resloved so console log print 1 then save 2 to promise chain, then catch is skipped, then next then print 2
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

// 2
// output is : 1 3 
// reject 1 go to catch, print 1 and then 3
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

//3
// output is : Error 2
// promise.all, when we meet reject, we go stright tp .catch and skip .then.
// 1s is 1, 2sec is error2, 3 sec is 3  (but never get it), 4 sec is error 4, but we read error 2 first 
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
