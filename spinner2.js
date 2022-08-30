process.stdout.write('hello from spinner1.js... \rheyyy\n');

const symbols = ["|", "/", "-", "\\", "|", "/", "-"];

let time = 0;
for (let symbol of symbols) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, time);
}

