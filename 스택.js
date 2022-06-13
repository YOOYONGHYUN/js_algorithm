// Stack() : 생성자 함수
function Stack(array) {
  return (this.array = array ? array : []);
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.push = function (element) {
  return this.array.push(element);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.peak = function () {
  return this.array[(this.array.length = 1)];
};

Stack.prototype.size = function () {
  return this.array.length;
};

Stack.prototype.indexOf = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) {
      return i;
    }
  }
  return -1;
};

Stack.prototype.includes = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) {
      return true;
    }
  }
  return false;
};
