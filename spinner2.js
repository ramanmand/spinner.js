//process.stdout.write("hello from spinner.js....\rheyyy\n");

/*setTimeout(() => {
  process.stdout.write('\r| Hello  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  from ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  Robin ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r  Mand ');
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  Bye Now! ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\n');
}, 1100);

// ... fill in the rest yourself .... */
//using code from typewriter.js


process.stdout.write(" Hello from Robin Mand Bye Now");

let lag = 100;

let spinner = ["\r|", "\r/", "\r-", "\r\\"];

for (const r of spinner) {
  setTimeout(() => {
    process.stdout.write(r);
  }, lag);
  lag += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, lag);