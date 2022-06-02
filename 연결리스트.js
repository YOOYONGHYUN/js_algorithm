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
  let node = new Node(value);
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
