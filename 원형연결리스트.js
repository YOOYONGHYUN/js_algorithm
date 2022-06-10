function Node(data) {
  this.data = data;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

CircularLinkedList.prototype.size = function () {
  return this.length;
};

CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;
console.log(node);

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);

CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head ->");
  if (this.length != 0) {
    process.stdout.write(`${this.head.data} ->`);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} ->`);
    }
  }
  console.log("null");
};

CircularLinkedList.prototype.append = function (value) {
  let current = this.head;
  let node = new Node(value);
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;

  this.length++;
};

let cll_2 = new CircularLinkedList();

cll_2.append(1);
cll_2.append(10);
cll_2.append(100);

cll_2.printNode();
console.log(cll_2.size());

CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = current;
    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }
    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }
  this.length++;
  return true;
};

CircularLinkedList.prototype.remove = function (value) {
  let current = this.head,
    data,
    prev = current;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;

  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }
    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;
  return data;
};

cll_3 = new CircularLinkedList();

cll_3.insert(1);
cll_3.insert(10);
cll_3.insert(100);
cll_3.insert(2, 1);
cll_3.insert(3, 3);
cll_3.printNode();

console.log(cll_3.remove(1000));
cll_3.printNode();
console.log(cll_3.remove(1));
cll_3.printNode();
console.log(cll_3.remove(2));
cll_3.printNode();
console.log(cll_3.remove(100));
cll_3.printNode();
console.log(cll_3.size());

CircularLinkedList.prototype.removeAt = function (position = 0) {
  let current = this.head,
    index = 0,
    data,
    prev;

  if (position < 0 || position > this.length) {
    return null;
  }

  if (current.data != value) {
    return null;
  }

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    data = current.data;
    prev.next = current.next;
  }
  this.length--;
  return data;
};

CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  do {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};

CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
