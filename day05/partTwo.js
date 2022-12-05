// part 2

const lines = require('fs').readFileSync('input.txt', 'utf-8').split('\n');
let columsIndex = [];
let instructions = [];

for (const line of lines) {
    if (line.includes('['))
        continue;
    else {
        columsIndex = line.trim().split(' ');
        const tmp = []
        for (const idx of columsIndex)
            if (idx !== '')
                tmp.push({idx, index: line.indexOf(idx), boxes: []})
        columsIndex = tmp;
        break;        
    }
}

for (const line of lines) {
    if (line.includes('[')) {
        for (const tab of columsIndex) {
            tab.boxes.push(line[tab.index])
        }
    } if (line.includes('move')) {
        instructions.push(line.split(' ').map(x => x.trim()))
    }
}

for (const tab of columsIndex) {
    tab.boxes = tab.boxes.filter(x => x !== ' ')
}

for (const instruction of instructions) {
    const number = parseInt(instruction[1]);
    const from = instruction[3];
    const to = instruction[5];
    let test = [];

    for (let i = 0; i < number; i++) {
        let fromArray = columsIndex.find(x => x.idx === from);
        let toArray = columsIndex.find(x => x.idx === to)
        test.push(fromArray.boxes.shift())
    }
    test = test.reverse()
    for (const ar of test) {
        let toArray = columsIndex.find(x => x.idx === to)
        toArray.boxes.unshift(ar)
    }
}

let msg = ""

for (const col of columsIndex) {
    msg += col.boxes[0];
}

console.log(msg)