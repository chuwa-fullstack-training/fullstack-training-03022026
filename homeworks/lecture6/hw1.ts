// 1. why there would be error in the following code? and how to fix it?
// The T extends User should have more props than id and type, and then the return value only has id and type, so it doesnt satsfy the full shape of T.
// TypeScript wull throw an error
// FIX: use he spread operator to preserve all properties from the original object
type HW1user = {
  id: number;
  type: string;
};

function makeCustomer<T extends HW1user>(u: T): T {
  return {
     ...u, // fix
    id: u.id,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid arguments") // 用new 会有堆栈信息，但是也可以不写 new 直接跟error message也行，就是不存了。
}
