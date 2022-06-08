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
  let current = this.head,
    node = new Node(value);

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

DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let current = this.head,
    node = new Node(value),
    index = 0,
    prev;

  if (position === 0) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position == this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }
  this.length++;

  return true;
};

DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;

  return current.data;
};

let dll_2 = new DoubleLinkedList();

dll_2.insert(1);
dll_2.insert(10);
dll_2.insert(100);
dll_2.insert(2, 1);
dll_2.insert(3, 3);
dll_2.printNode();
dll_2.printNodeInverse();

console.log(dll_2.remove(1000));
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.remove(1));
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.remove(2));
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.remove(100));
dll_2.printNode();
dll_2.printNodeInverse();

DoubleLinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position > this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length == 1) this.tail = null;
    else this.head.prev = null;
  } else if (position == this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};

let dll_3 = new DoubleLinkedList();
console.log("dll_3");
dll_3.insert(1);
dll_3.insert(10);
dll_3.insert(100);
dll_3.insert(2, 1);
dll_3.insert(3, 3);
dll_3.printNode();
dll_3.printNodeInverse();

console.log(dll_3.removeAt(1000));
dll_3.printNode();
dll_3.printNodeInverse();
console.log(dll_3.removeAt(1));
dll_3.printNode();
dll_3.printNodeInverse();
console.log(dll_3.removeAt(2));
dll_3.printNode();
dll_3.printNodeInverse();
console.log(dll_3.removeAt(100));
dll_3.printNode();
dll_3.printNodeInverse();

DoubleLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (currnet != null) {
    if (current.data === value) {
      return value;
    }
    index++;
    current = current.next;
  }
  return -1;
};

DoubleLinkedList.prototype.removve2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
