require('fs').readFileSync('input.txt', "utf-8").split('\r\n\r\n').map((x) => x.split('\n')).map((x) => x.map(t => parseInt(t))).map((x => x.reduce((a, b) => a + b, 0))).sort((a, b) => b - a).reduce((a, b, i, d) => i == 1 ? console.log(`first exercice: ${d[0]}`, `second exercice ${d[0] + d[1] + d[2]}`): 0)