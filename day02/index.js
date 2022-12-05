// 1

const rounds = require('fs').readFileSync('input.txt', "utf-8").split('\n').map((x => x.trim()))
let points = 0;

for (const round of rounds) {
    const plays = round.split(' ');
    if (plays[0] === 'A' ) {
        if (plays[1] === 'X')
            points += 4
        else if (plays[1] === 'Y')
            points += 8
        else
            points += 3
    }

    if (plays[0] === 'B' ) {
        if (plays[1] === 'X')
            points += 1
        else if (plays[1] === 'Y')
            points += 5
        else
            points += 9
    }

    if (plays[0] === 'C' ) {
        if (plays[1] === 'X')
            points += 7
        else if (plays[1] === 'Y')
            points += 2
        else
            points += 6
    }
}

console.log(points)

points = 0;

for (const round of rounds) {
    const plays = round.split(' ');
    if (plays[1] === 'X' ) {
        if (plays[0] === 'A')
            points += 3
        else if (plays[0] === 'B')
            points += 1
        else
            points += 2
    }

    if (plays[1] === 'Y' ) {
        if (plays[0] === 'A')
            points += 4
        else if (plays[0] === 'B')
            points += 5
        else
            points += 6
    }

    if (plays[1] === 'Z' ) {
        if (plays[0] === 'A')
            points += 8
        else if (plays[0] === 'B')
            points += 9
        else
            points += 7
    }
}

console.log(points)
