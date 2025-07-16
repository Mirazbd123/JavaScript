let x = 3434;
let y = 3434;
let add = (p1, p2) => {
    return p1 + p2 + 3421;
}
console.log(add(x, y));

module.exports = {  // this module will be exported 
    x,
    y,
    add
};