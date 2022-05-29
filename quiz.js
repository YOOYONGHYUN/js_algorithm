//Switch Quiz
const day = 3;
let weekend = "";

switch (day) {
  case 1:
    weekend = "월요일";
    break;
  case 2:
    weekend = "화요일";
    break;
  case 3:
    weekend = "수요일";
    break;
  case 4:
    weekend = "목요일";
    break;
  case 5:
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  case 7:
    weekend = "일요일";
    break;
  default:
    msg = "없는 요일입니다";
    break;
}

console.log(weekend);

//반복문 퀴즈-1
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);

//반복문 퀴즈 -2
for (let i = 2; i <= 9; i++) {
  for (let a = 1; a <= 9; a++) {
    console.log(i * a);
  }
}

//함수 퀴즈
function MAX(x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  }
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));
