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

function answer_2(n) {
  let result = [];
  let stack = [];
  for (let i = 1; i <= n; i++) {
    stack.push(i);
  }
  let a = 0;
  while (1) {
    for (let i = 0; i < n; i++) {
      if (a == 0) {
        result.push(stack.shift());
        a = 1;
      } else if (a == 1) {
        stack.push(stack.shift());
        a = 0;
      }
    }
    n -= 1;
    if (stack.length <= 0) break;
  }
  console.log(stack);
  // 1 2 3 4
  // 3 4 2
  // 2 4
  return result;
}

let input_2 = [4, 7, 10];

for (let i = 0; i < input_2.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_2(input_2[i]));
}

//  1 2 3 4  1
//  3 4 2   3
//  2 4     2
//         4

// 1 2 3 4 5 6 7  1
// 3 4 5 6 7 2    3
// 5 6 7 2 4      5
// 7 2 4 6        7
// 4 6 2          4
// 2 6            2
// 6              6

function answer_3(priorities, select) {
  let result = -1;
  let vq = [];
  let pq = [];

  for (let i = 0; i < priorities.length; i++) {
    vq.push(i);
    pq.push(priorities[i]);
  }

  let count = 0;
  while (true) {
    if (pq[0] === Math.max(...priorities)) {
      if (vq[0] === select) {
        count++;
        result = count;
        break;
      } else {
        pq.shift();
        vq.shift();
        count++;
      }
    } else {
      pq.push(pq.shift());
      vq.push(vq.shift());
    }
  }

  return result;
}

let input_3 = [
  [[3], 0],
  [[3, 4, 5, 6], 2],
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input_3.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_3(input_3[i][0], input_3[i][1]));
}

function CircularQueue(size) {
  this.array = new Array(size);
  this.size = this.array.length;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}

CircularQueue.prototype.enqueue = function (element) {
  this.length++;
  this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function () {
  this.length--;
  return this.array[this.head++ % this.size];
};

function answer_4(n, m, k) {
  let result = [];

  //make circular
  let cq = new CircularQueue(n);
  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  }
  console.log(cq);

  // find first node
  cq.head = cq.tail = (n + m - 1) % n;

  // remove representative
  let count;
  result.push(cq.dequeue());
  while (cq.length != 0) {
    count = k - 1;
    while (count--) {
      cq.enqueue(cq.dequeue);
    }
    result.push(cq.dequeue());
  }

  return result;
}

let input_4 = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

for (let i = 0; i < input_4.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_4(input_4[i][0], input_4[i][1], input_4[i][2]));
}

function dequeue(array = []) {
  this.array = array;
}

dequeue.prototype.push_front = function (element) {
  return this.array.unshift(element);
};

dequeue.prototype.push_back = function (element) {
  return this.array.push(element);
};

dequeue.prototype.pop_front = function () {
  let ret = this.array.unshift();
  return ret === undefined ? -1 : ret;
};

dequeue.prototype.pop_back = function () {
  let ret = this.array.pop();
  return ret === undefined ? -1 : ret;
};

dequeue.prototype.empty = function () {
  return this.length == 0 ? 1 : 0;
};

dequeue.prototype.size = function () {
  return this.length;
};

dequeue.prototype.front = function () {
  return this.array.length == 0 ? -1 : this.array[0];
};

dequeue.prototype.back = function () {
  return this.array.length == 0 ? -1 : this.array[this.array - 1];
};

function answer_5(cmds) {
  let result = [];
  let dq = new Deque();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];
  }

  switch (cmd) {
    case "push_front":
      dq.push_front(Number(cmds[i].split(" ")[1]));
      break;
    case "push_back":
      dq.push_back(Number(cmds[i].split(" ")[1]));
      break;
    case "pop_front":
      result.push(dq.pop_front());
      break;
    case "pop_back":
      result.push(dq.pop_back());
      break;
    case "size":
      result.push(dq.size);
      break;
    case "empty":
      result.push(dq.empty());
      break;
    case "front":
      result.push(dq.front());
      break;
    case "back":
      result.push(dq.back());
      break;
  }

  return result;
}

let input_5 = [
  ["push_back 1", "push_from 2", "pop_front", "pop_back", "pop_front"],
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "push_fron 6",
    "front",
    "back",
    "pop_front",
    "size",
    "empty",
  ],
  [
    "push_back 7",
    "push_back 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "push_front 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
