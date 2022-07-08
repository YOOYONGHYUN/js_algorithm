import { LinkedList } from "./연결리스트.mjs";

const HASH_SIZE = 37;

// Element(): Key, Value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// ChaningHashTable(): 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCode(): 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear(): 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size(): 크기 변환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

// put(): 데이터 추가
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} --> index: ${index}`);

  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }

  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
};

let cht = new ChainingHashTable();
cht.put("Ana", 172);

//getBuffer() : 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while (current);
    }
  }
  return array;
};

ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do {
        process.stdout.write(`-> ${current.data.key} : ${current.data.value}`);
        current = current.next;
      } while (current);
      console.log("");
    }
  }
};

cht.print();

ChainingHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);

  if (this.table[index] !== undefined && this.table[index].length !== 0) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }
  return undefined;
};

console.log(cht.get("Ana"));

ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;

  if (this.table[index] !== undefined) {
    let current = this.table[index].head;
    do {
      if (current.data.key == key) {
        element = current.data;
        this.table[index].remove(current.data);
        if (this.table[index].length == 0) {
          delete this.table[index];
        }
      }
      current = current.next;
    } while (current);
  }

  this.length--;
  return element;
};
