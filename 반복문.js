//기본 문제 풀이 (반복문) -별별별
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  return result;
}

let input = [5, 7, 12];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

//기본 문제 풀이 (반복문) - 두 수 사이 숫자
function answer_2(x, y) {
  let result = [];
  if (x < y) {
    for (let i = x; i <= y; i++) {
      result.push(i);
    }
  } else if (x > y) {
    for (let i = y; i <= x; i++) {
      result.push(i);
    }
  }
  return result;
}

//더 간략한 방법

function answer_3(x, y) {
  let result = [];
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }
  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  return result;
}

let input_2 = [
  [3, 7],
  [8, 3],
  [12, 10],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_2(input_2[i][0], input_2[i][1]));
}

//반복문=반평균
function 반평균(score) {
  let average = 0;
  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }
  average = average / score.length;
  average = average.toFixed(2);
  return average;
}

let input_3 = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input_3.length; i++) {
  console.log(`#${i + 1} ${반평균(input_3[i])}`);
}

//반복문-핸드폰 판매
function 우수사원(employee) {
  let employee_id;
  /* 내가 짠 코드
  let max = Math.max(...employee);
  employee_id = employee.indexOf(max) + 1;
  */
  let max = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }
  return employee_id;
}

let input_4 = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${우수사원(input_4[i])}`);
}

//반복문 = 무한 뺄셈
function 무한뺄셈(x, y) {
  let item = [x, y];
  let i = 0;
  while (true) {
    item.push(item[i] - item[i + 1]);
    i++;
    if (item[i] - item[i + 1] < 0) {
      break;
    }
  }
  return item;
}

let input_5 = [
  [9, 3],
  [6, 3],
  [13, 7],
];

for (let i = 0; i < input_5.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(무한뺄셈(input_5[i][0], input_5[i][1]));
}
