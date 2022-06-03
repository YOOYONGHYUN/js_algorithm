function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

let link = new LinkedList();
console.log(link);

link.head = new Node(123);
link.length++;
console.log(link);

link.head.next = new Node(345);
link.length++;
console.log(link);

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} =>`);
  }
  console.log("null");
};

LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

let a = new LinkedList();
a.append(1);
a.append(10);
a.append(100);
a.printNode();

LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }

  this.length++;
  return true;
};

let b = new LinkedList();
b.insert(1);
b.insert(10);
b.insert(100);
b.printNode();

b.insert(2, 1);
b.insert(3, 3);
b.printNode();

LinkedList.prototype.remove = function (value) {
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
  } else {
    prev.next = current.next;
  }

  this.length--;
  return current.data;
};

console.log(b.remove(1000));
b.printNode();
console.log(b.remove(1));
b.printNode();
console.log(b.remove(2));
b.printNode();
console.log(b.remove(100));
b.printNode();

LinkedList.prototype.removeAt = function (position = 0) {
  let current = this.head,
    index = 0,
    prev;

  if (position < 0 || position > this.length) {
    return null;
  }

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;
  return current.data;
};

LinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};

LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
