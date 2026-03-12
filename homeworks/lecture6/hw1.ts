// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

// Because the return type only contanins attributes of User, but the actually return type is T, 
// which could have more attributes that are not in User.
// So we can copy all attributes in u, and replace its type, so that we won't miss any attributes.

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}



// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if(typeof a==="string" && typeof b==="string"){
    return `${a} : ${b}`;
  }
  else if(typeof a==="number" && typeof b==="number"){
    return a+b;
  }
  throw new Error('The function should accept either two strings or two numbers at the same time.');
}


// to prevent duplicate User
export {};