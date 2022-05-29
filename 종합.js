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
