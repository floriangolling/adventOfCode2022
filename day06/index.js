// one

const input = require('fs').readFileSync('input.txt', 'utf-8')

for (let i = 0; i < input.length - 4; i++) {
    let array = [input[i], input[i + 1], input[i + 2], input[i + 3]]
    const whitout =  new Set(array);
    if (array.length === whitout.size) {
        console.log(i + 4);
        break;
    }
}

// two

for (let i = 0; i < input.length - 14; i++) {
    let array = [];
    for (let k = 0; k < 14; k++)
        array.push(input[k + i]);
        const whitout =  new Set(array);
    if (array.length === whitout.size)
        return console.log(i + 14);
}
