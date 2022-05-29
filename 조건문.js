//조건문 -대소 비교
function 대소비교(x, y) {
  if (x < y) {
    return "<";
  } else if (x > y) {
    return ">";
  } else {
    return "=";
  }
}

let input = [
  [3, 5],
  [7, 4],
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${대소비교(input[i][0], input[i][1])}`);
}

//조건문 - 나누기와 대소 비교
function 나누기(a, b, c, d) {
  let result;
  if (a / b > c / d) {
    result = 1;
  } else if (a / b == c / d) {
    result = 0;
  } else if (a / b < c / d) {
    result = -1;
  }
  return result;
}

let input_2 = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4],
];

for (let i = 0; i < input_2.length; i++) {
  console.log(
    `#${i + 1} ${나누기(
      input_2[i][0],
      input_2[i][1],
      input_2[i][2],
      input_2[i][3]
    )}`
  );
}

// 조건문 - 윤별판별기
function 윤별판별기(year) {
  let result;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    result = true;
  } else result = false;
  return result;
}

let input_3 = [4, 100, 124, 247, 400];

for (let i = 0; i < input_3.length; i++) {
  console.log(`#${i + 1} ${윤별판별기(input_3[i])}`);
}

// 조건문 - ATM 기기
function atm(x, y) {
  let balance;
  if (x + 0.5 > y) {
    balance = y;
  } else if (x % 5 != 0) {
    balance = y;
  } else {
    balance = y - x - 0.5;
  }
  return balance;
}

console.log(atm(33, 130.0));

// 조건문 -네번재 좌표 구하기
function 좌표구하기(x, y) {
  let 좌표 = [x, y];
  let 네번째좌표 = [];
  for (let i = 0; i < 좌표.length; i++) {
    if (좌표[i][0] == 좌표[i][1]) {
      좌표[i][3] = 좌표[i][2];
      네번째좌표.push(좌표[i][3]);
    } else if (좌표[i][0] != 좌표[i][1] && 좌표[i][1] == 좌표[i][2]) {
      좌표[i][3] = 좌표[i][0];
      네번째좌표.push(좌표[i][3]);
    } else if (좌표[i][0] != 좌표[i][1] && 좌표[i][1] != 좌표[i][2]) {
      좌표[i][3] = 좌표[i][1];
      네번째좌표.push(좌표[i][3]);
    }
  }
  return 네번째좌표;
}

let input_6 = [
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];

for (let i = 0; i < input_6.length; i++) {
  console.log(좌표구하기(input_6[i][0], input_6[i][1]));
}
