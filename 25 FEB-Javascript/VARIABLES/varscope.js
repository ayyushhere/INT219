var globalVar = "I'm a global variable";
function test() {
    const localVar = "I'm a local variable";
    console.log(globalVar);
    console.log(localVar);  
}
// console.log(localVar); // ReferenceError: localVar is not defined
console.log(globalVar);
test();