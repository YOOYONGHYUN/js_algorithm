//종합 - 최솟값 구하기
function answer(x, y) {
  let min;
  min = x > y ? y : x;
  return min;
}

let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

function 제곱(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

let input_2 = [
  [2, 3],
  [4, 6],
  [1, 100],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${제곱(input_2[i][0], input_2[i][1])}`);
}

function 제한(input) {
  let permit;
  if (input.height >= 150) {
    permit = true;
  } else {
    permit = false;
  }
  return permit;
}

let input_3 = [
  { name: "john", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${제한(input_3[i])}`);
}

function 날짜(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;
  let date = new Date(str);

  for (let i = 0; i < week.length; i++) {
    day = week[date.getDay()];
  }
  return day;
}

let input_4 = ["2021-01-27", "2021-02-27", "2021-03-14"];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${날짜(input_4[i])}`);
}

function 중복제거(arr) {
  let new_arr = [];
  for (i of arr) {
    if (!new_arr.includes(i)) new_arr.push(i);
  }
  return new_arr;
}

let input_5 = [
  ["john", "alice", "alice"],
  ["Hello", "hello", "HELLO", "hello"],
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(중복제거(input_5[i]));
}

function 최대값(arr) {
  let max;
  max = -100;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let input_6 = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input_6.length; i++) {
  console.log(`#${i + 1} ${최대값(input_6[i])}`);
}

function 스팸(str) {
  let spam_flag;
  spam_flag = str.toLowerCase().includes("advert");
  return spam_flag;
}

let input_7 = [
  "RE: Request documents",
  "[Advertisement] free mobile!",
  "50% off this week (advertising)",
];

for (let i = 0; i < input_7.length; i++) {
  console.log(`#${i + 1} ${스팸(input_7[i])}`);
}

function 거꾸로(user) {
  let reverse = [];
  for (let i = 0; i < user.length; i++) {
    reverse.unshift(user[i]);
  }
  return reverse;
}

let input_8 = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(거꾸로(input_8[i]));
}

function 교정(str) {
  let fix_str = "";
  let split = str.split(" ");

  for (let item of split) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  return fix_str;
}

let input_9 = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week",
];

for (let i = 0; i < input_9.length; i++) {
  console.log(`#${i + 1} ${교정(input_9[i])}`);
}

function 곱하기(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
//arr[0][0] arr[0][1] arr[1][0] arr[1][1] arr[2][0] arr[2][1] arr[2][2]

let input_10 = [
  [[1], [2], [3]],
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input_10.length; i++) {
  console.log(`#${i + 1} ${곱하기(input_10[i])}`);
}
