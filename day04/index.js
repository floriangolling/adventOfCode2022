const lines = require('fs').readFileSync('input.txt', "utf-8").split('\n')
let containerNumber = 0;

for (const line of lines) {
    let contain = false;
    const coma = line.split(',');
    const f = coma[0].split('-').map(x => parseInt(x));
    const s = coma[1].split('-').map(x => parseInt(x));

    if (f[0] >= s[0] && f[1] <= s[1]) {
        contain = true;
    }
    if (s[0] >= f[0] && s[1] <= f[1]) {
        contain = true;
    }
    if (contain)
        containerNumber++;
}

console.log(containerNumber)

containerNumber = 0;

for (const line of lines) {
    let contain = false;
    const coma = line.split(',');
    const f = coma[0].split('-').map(x => parseInt(x));
    const s = coma[1].split('-').map(x => parseInt(x));

    for (let t = f[0]; t <= f[1]; t++) {
        for (let k = s[0]; k <= s[1]; k++) {
            if (t == k)
                contain = true;
        }
    }
    if (contain) {
        containerNumber++;
    }
}

console.log(containerNumber)