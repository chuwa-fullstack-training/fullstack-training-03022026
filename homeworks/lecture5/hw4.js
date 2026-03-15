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
// 1
// 2
// The promise is resolved with 1, so the first .then() runs and prints 1.
// It returns 2, so .catch() is skipped and the last .then() prints 2

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
// 1
// 3
// The promise is rejected with 1, so the first .then() is skipped.
// The .catch() runs, prints 1, returns 3, and the last .then() prints 3.

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

// 2
// Promise.all() rejects as soon as one promise rejects.
// runReject(2) fails earlier than runReject(4), so the final output is Error: 2.
