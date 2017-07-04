// Shallow-clone an object:
const data = { x: 42, y: 27, label: 'Treasure' };

const clone = data;
const clone1 = Object.assign({}, data); 
const clone2 = { ...data };

console.log(clone);
const a = 'from'

function helloyou(str) {
    return `${a} ${str}`;/*?*/
}