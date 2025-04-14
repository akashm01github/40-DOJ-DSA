//💎🪨 jewels-and-stones
let jewels = "aA";
let stones = "aAAbbbb";
let set = new Set();
let score = 0;
for (let i = 0; i < jewels.length; i++) {
  let ch = jewels.charAt(i);
  set.add(ch);
}

for (let i = 0; i < stones.length; i++) {
  if (set.has(stones.charAt(i))) {
    score++;
  }
}