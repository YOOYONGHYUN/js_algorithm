function answer(cmds) {
  let result = [];
  let queue = [];
  let split;
  console.log("asdasd");
  for (let i = 0; i < cmds.length; i++) {
    if (cmds[i].startsWith("enqueue")) {
      split = cmds[i].split(" ");
      queue.push(split[1]);
    } else if (cmds[i] == "dequeue") {
      if (queue.length == 0) {
        result.push(-1);
      } else {
        result.push(queue.shift());
      }
    } else if (cmds[i] == "empty") {
      if (queue.length == 0) {
        result.push(1);
      } else result.push(0);
    } else if (cmds[i] == "size") {
      result.push(queue.length);
    } else if (cmds[i] == "front") {
      if (queue.length == 0) {
        result.push(-1);
      } else {
        result.push(queue[0]);
      }
    } else if (cmds[i] == "back") {
      if (queue.length == 0) {
        result.push(-1);
      } else {
        result.push(queue[queue.length - 1]);
      }
    }
  }

  return result;
}

let input = [
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],
  [
    "enqueue 3",
    "enqueue 4",
    "enqueue 5",
    "enqueue 6",
    "front",
    "back",
    "dequeue",
    "size",
    "empty",
  ],
  [
    "enqueue 7",
    "enqueue 8",
    "front",
    "back",
    "size",
    "empty",
    "dequeue",
    "dequeue",
    "dequeue",
    "size",
    "empty",
    "dequeue",
    "enqueue 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
