function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

function PriorityQueue() {
  this.array = [];
}

PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

PriorityQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

//우선순위 큐 값 추가하기
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

//우선순위 큐 값 제거하기
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

//front(): 가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
};

//size(): 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

//clear(): 큐 초기화
PriorityQueue.prototype.clear = function () {
  this.array = [];
};
