/*

https://leetcode.com/problems/implement-queue-using-stacks/
문제 easy 232 Implement Queue using Stacks

두 개의 스택만 사용하여 선입선출(FIFO) 큐(우선순위 큐)을 구현합니다.
구현된 큐은 일반 큐의 모든 기능을 지원해야 합니다. (push, peek, pop, and empty)


the MyQueue class 구현:
void push(int x) 요소 x를 큐의 뒤쪽으로 푸시합니다.
int pop() 큐의 앞쪽에서 요소를 제거하고 반환합니다.
int peek() 큐의 맨 앞에 있는 요소를 반환합니다.
boolean empty() 큐가 비어 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다.

exam1:
  Input
  ["MyQueue", "push", "push", "peek", "pop", "empty"]
  [[], [1], [2], [], [], []]
  Output
  [null, null, null, 1, 1, false]

  Explanation
  MyQueue myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  myQueue.peek(); // return 1
  myQueue.pop(); // return 1, queue is [2]
  myQueue.empty(); // return false

제약:
  1 <= x <= 9
  At most 100 calls will be made to push, pop, peek, and empty.
  All the calls to pop and peek are valid.


팔로우 업 :
Follow-up: 후속 조치: 각 작업이 O(1) 시간 복잡도 상각되도록 대기열을 구현할 수 있습니까?
즉, n 작업을 수행하면 해당 작업 중 하나가 더 오래 걸리더라도 전체 O(n) 시간이 걸립니다.

// Topics
// Stack / Design / Queue


*/

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  var pop = this.stack2.pop();

  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return pop;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }

  var pop = this.stack2.pop();
  this.stack2.push(pop);
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return pop;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
