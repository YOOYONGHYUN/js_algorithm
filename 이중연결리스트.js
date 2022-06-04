Node = function (data) {
  this.data = data;
  this.next = null;
  this.prev = null;
};

DoubleLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

let a = new DoubleLinkedList();
let node;

node = new Node(123);
a.head = node;
a.tail = node;
a.length++;

node = new Node(345);
a.tail.next = node;
node.prev = a.tail;
a.tail = node;
a.length++;

DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} ->`);
  }
  console.log("null");
};

DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write("null <-");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <-`);
  }
  console.log("tail");
};

DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
dll.printNodeInverse();
