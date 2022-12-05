const lines = require('fs').readFileSync('input.txt', "utf-8").split('\n')

const values = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52    
}

let prio = 0;

for (const line of lines) {
    let found = false;
    const half = Math.floor(line.length / 2);
    const firstHalf = line.slice(0, half)
    const secondHalf = line.slice(half, line.length)
    for (const caraOne of firstHalf) {
        if (found)
            continue;
        for (const caraTwo of secondHalf) {
            if (found)
                continue;
            if (caraOne === caraTwo) {
                prio += values[caraOne]
                found = true;
            }
        }
    }

}

console.log(prio)

let prio2 = 0;

for (let i = 0; i < lines.length; i += 3) {
    let foundTwo = false;
    for (const cara1 of lines[i]) {
        if (foundTwo)
            continue;
        for (const cara2 of lines[i + 1]) {
            if (foundTwo)
                continue;            
            for (const cara3 of lines[i + 2]) {
                if (foundTwo)
                    continue;
                if (cara1 === cara2 && cara2 === cara3) {
                    prio2 += values[cara1]
                    foundTwo = true;
                }
            }
        }
    }
}

console.log(prio2)