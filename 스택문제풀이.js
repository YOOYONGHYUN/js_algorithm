function answer(train) {
  let stack = [];
  let num = 0;
  for (let i = 0; i < train.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
      stack.push(++num);
    }

    if (stack[stack.length - 1] === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}

let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}

function answer_2(str) {
  let result = [];
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      if (stack.length == 0) {
        return [];
      } else {
        result.push([stack.pop(), i]);
      }
    }
  }

  if (!stack.length == 0) {
    return [];
  }

  return result;
}

let input_2 = [
  "(a+b)",
  "(a*(b+c)+d)",
  "(a*(b+c)+d+(e)",
  "(a*(b+c)+d)+e)",
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input_2.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_2(input_2[i]));
}

function answer_3(str) {
  let result = [];
  let stack = [];
  let dish = str.split("").sort().join("");
  dish_index = 0;
  for (let i = 0; i < str.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < str[i]) {
      stack.push(dish[dish_index++]);
      result.push(0);
    }

    if (stack.length == 0 || stack[stack.length - 1] > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

let input_3 = ["bacd", "dabc", "edcfgbijha"];

for (let i = 0; i < input_3.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_3(input_3[i]));
}

//핵어렵네 ㅡㅡ 진짜 짜증나게 하고 있어
function answer_4(giraffe) {
  let result = 0;
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < giraffe.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1]["h"] < giraffe[i]) {
      result += i - stack.pop()["i"] - 1;
    }
    stack.push({ h: giraffe[i], i: i });
  }

  return result;
}

let input_4 = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input_4.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_4(input_4[i]));
}

function answer_5(str) {
  let result = 0;
  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    let mark = str[i];
    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.length == 0 || stack[stack.length - 1] != "(") {
          return 0;
        }
        if (str[i - 1] == "(") {
          result += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.length == 0 || stack[stack.length - 1] != "[") {
          return 0;
        }
        if (str[i - 1] == "[") {
          result += temp;
        }
        stack.pop();
        temp /= 3;
        break;
    }
  }
  if (stack.length != 0) {
    return 0;
  }
  return result;
}

let input_5 = ["(()[[]])", "[][]((})", "(()[[]])([])"];

for (let i = 0; i < input_5.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer_5(input_5[i]));
}
