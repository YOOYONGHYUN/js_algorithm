//배열 문제 풀이 - 수열 최솟값 찾기
function answer(nums) {
  let result = [];
  let 최소 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 최소) {
      최소 = nums[i];
    }
  }
  let idx = nums.indexOf(최소);
  while (idx != -1) {
    result.push(idx);
    idx = nums.indexOf(최소, idx + 1);
  }
  return result;
}

let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}

function 체스(chess) {
  let result = [];
  let required = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < chess.length; i++) {
    result.push(required[i] - chess[i]);
  }
  return result;
}

let input_2 = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input_2.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(체스(input_2[i]));
}

function 합구하기(nums) {
  let result = [];
  /* 내가 짠 것
  nums.sort((x, y) => y - x);
  for (let i = 0; i < 2; i++) {
    result.push(nums[i]);
  }*/
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }
  return result;
}

let input_3 = [
  [-11, 5, 18, -2, -3, 6, 5, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input_3.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(합구하기(input_3[i]));
}

function 난장이(dwarf) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  let newSum = sum - 100;
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (dwarf[i] + dwarf[j] == newSum) {
        result = dwarf.filter((item) => item !== dwarf[i] && item !== dwarf[j]);
        break;
      }
    }
  }

  return result;
}

let input_4 = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input_4.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(난장이(input_4[i]));
}

function 나무(height) {
  let str = "\n";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

let input_5 = [3, 5, 7];

for (let i = 0; i < input_5.length; i++) {
  console.log(나무(input_5[i]));
}

function two_sum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}

let input_6 = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input_6.length; i++) {
  console.log(two_sum(input_6[i][0], input_6[i][1]));
}

function 퀴즈(mark) {
  let result = 0;
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }

  return result;
}

let input_7 = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input_7.length; i++) {
  console.log(퀴즈(input_7[i]));
}

function 벽돌(blocks) {
  let result = 0;
  let sum = 0;
  for (let i = 0; i < blocks.length; i++) {
    sum += blocks[i];
  }
  let 평균 = sum / blocks.length;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > 평균) {
      result += blocks[i] - 평균;
    }
  }
  return result;
}

let input_8 = [
  [5, 2, 4, 1, 7, 5],
  [12, 8, 10, 11, 9, 5, 8],
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input_8.length; i++) {
  console.log(벽돌(input_8[i]));
}

function 빈도수(s, e) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  return result;
}

let input_9 = [
  [129, 137],
  [1412, 1918],
  [4159, 9182],
];

for (let i = 0; i < input_9.length; i++) {
  console.log(빈도수(input_9[i][0], input_9[i][1]));
}

function 달팽이(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    length--;
    if (length == 0) break;
    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }
  return result;
}

let input_10 = [3, 5, 6];

for (let i = 0; i < input_10.length; i++) {
  console.log(달팽이(input_10[i]));
}

//배열 모양은 같은데 왜 값은 다르게 나올까?
let result_1 = [];
for (let i = 0; i < 5; i++) {
  result_1[i] = [];
  result_1[0][0] = 1;
  result_1[0][1] = 2;
  result_1[0][2] = 3;
}

let result_2 = [];
let 배열 = [];
for (let i = 0; i < 5; i++) {
  result_2[i].push(배열);
  result_2[0][0] = 1;
  result_2[0][1] = 2;
  result_2[0][2] = 3;
}

console.log(result_1);
console.log(result_2);
