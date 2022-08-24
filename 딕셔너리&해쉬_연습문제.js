function answer(class_1, class_2) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < class_1.length; i++) {
    map.set(class_2[i], map.get(class_1[i]) + 1 || 1);
  }

  for (let i = 0; i < class_1.length; i++) {
    if (map.has(class_1[i])) {
      result.push(class_1[i]);
    }
  }

  return result;
}

let input = [
  [
    ["Kali", "Oliver", "Naomi"],
    ["Oliver", "Naomi", "Maya"],
  ],
  [
    ["Roxy", "Olga", "Kara", "Nana"],
    ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}

function answer_2(card, select) {
  let result = [];

  for (let i = 0; i < select.length; i++) {
    result.push(card.filter((a) => a == select[i]).length);
  }

  return result;
}

let input_2 = [
  [
    [-6, -1, 6, 1, 1],
    [-2, 1, 3],
  ],
  [
    [7, 4, 3, 10, 10, 10, -10, -10, 7, 3],
    [10, 9, -5, 4, 6, -10],
  ],
  [
    [5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1],
    [4, 5, 1, 10, -2, -3, 3, -8],
  ],
];

for (let i = 0; i < input_2.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_2(input_2[i][0], input_2[i][1]));
}

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(size) {
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;
  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, index + 1);
      this.length++;

      return true;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);
  return false;
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % this.size;
  } while (index !== startIndex);
};

function answer_3(name) {
  let result = [];
  let ht = new HashTable(name.length);

  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }

  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }

  return result;
}

let input_3 = [
  ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],
  ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"],
  [
    "Ruby",
    "Robin",
    "Jordan",
    "Kori",
    "Rei",
    "Madonna",
    "Justin",
    "Maya",
    "Lakia",
    "Kali",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_3(input_3[i]));
}
