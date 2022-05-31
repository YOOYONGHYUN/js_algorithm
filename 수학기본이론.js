function answer(a, d, n) {
  let index = -1;
  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  } else {
    index = -1;
  }
  return index;
}

let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

function 등차(a, b, c) {
  let number = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);
  let d = 0;
  /* 내가 짠 코드
  d = (c - a) / 3;
  for (let i = 1; i < 5; i++) {
    if (num.includes(a + d * (i - 1)) == false) {
      number = a + d * (i - 1);
    }
  }
  */
  // 등차 구하기
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  // 위치 구하기
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  number = num[0] + d * index;
  return number;
}

let input_2 = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${등차(input_2[i][0], input_2[i][1], input_2[i][2])}`);
}
