var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
    // Coerce process.argv strings into numbers
    sum += Number(process.argv[i])
}

console.log(sum)