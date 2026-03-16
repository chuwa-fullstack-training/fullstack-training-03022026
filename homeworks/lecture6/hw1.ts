// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): User {
  return {
    id: u.id,
    type: "customer",
  };
}
// The function reutrns T, but T may contain more properties than User (because 'T extends User)
// The returned object only has id and type, so we can change the return type to User

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;;
  } else {
    throw new Error("Parameters are one string and one number.")
  }
}
// The original code only checks the type of a but not b
// For original 'else' part, will allow the mixed types (one number and one string)
// So we have to add these conditions to check both parameters are strings or both are numbers
// Otherwise, it should throw an error