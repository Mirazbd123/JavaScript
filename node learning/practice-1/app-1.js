// scoping

let x = 10;
let y = 20;
const add = (p1, p2) => {
    return p1 + p2;
}
/// adding two variables

module.exports = {  // this module will be exported 
    x,
    y,
    add
};

console.log(module) // this will print the module as object
