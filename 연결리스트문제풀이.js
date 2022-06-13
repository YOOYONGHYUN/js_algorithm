function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  let current, prev;
  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);

    if (i === 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }

  return ll;
}

let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} ->`);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  answer(input[i]).printNode();
}

function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList_2() {
  this.head = null;
}

function answer_2(ll) {
  let current = ll.head,
    prev = null,
    next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  ll.head = prev;

  return ll;
}

let input_2 = [
  [7, 3, 1],
  [4, 6, 9, 1, 3],
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList_2.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} ->`);
  }

  console.log("null");
};

LinkedList_2.prototype.makeFiles = function (files) {
  let current = this.head,
    node;

  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input_2.length; i++) {
  process.stdout.write(`#${i + 1}`);
  let ll_2 = new LinkedList_2();
  ll_2.makeFiles(input_2[i]);
  answer_2(ll_2).printNode();
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList_3() {
  this.head = null;
}

function answer_3(n, m, k) {
  let result = [];

  // 1. Circular Linked List 제작.
  let ll = new LinkedList_3();
  let current, prev;

  for (let i = 1; i <= n; i++) {
    current = new Node(i);
    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  current.next = ll.head;

  // 2. Start node 위치 설정.
  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  // 3. 후보자들 중 k만큼 움직이면서 제거 --> 단, 혼자 남을 때
  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }

  // 4. 혼자 남은 후보 번호를 result 추가
  result.push(current.data);

  return result;
}

let input_3 = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_3(input_3[i][0], input_3[i][1], input_3[i][2]));
}
