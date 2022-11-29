/* 
문제 url: https://leetcode.com/problems/soup-servings/

수프에는 유형 A와 유형 B의 두 가지 유형이 있습니다.
처음에는 각 유형의 수프가 n ml입니다.
작업에는 네 가지 종류가 있습니다.

수프 A 100ml와 수프 B 0ml를 제공
수프 A 75ml와 수프 B 25ml 제공
수프 A 50ml와 수프 B 50ml를 제공
수프 A 25ml와 수프 B 75ml를 제공

우리가 수프를 대접할 때, 우리는 그것을 누군가에게 주고,
우리는 더 이상 그것을 가지고 있지 않습니다.
매 턴, 우리는 0.25의 동일한 확률로 네 가지 작업 중에서 선택합니다.
남은 수프의 양이 작업을 완료하기에 충분하지 않은 경우 가능한 한 많이 제공됩니다.
우리는 더 이상 두 가지 유형의 수프가 모두 부족하면 중단합니다.

B 수프 100ml를 모두 먼저 사용하는 작업은 없습니다.

수프 A가 먼저 비게 될 확률과 A와 B가 동시에 비게 될 확률의 절반을 반환합니다.
실제 답변의 10의 -5제곱 이내의 답변이 수락됩니다.

exam1

Input: n = 50
Output: 0.62500
Explanation: If we choose the first two operations, A will become empty first.
For the third operation, A and B will become empty at the same time.
For the fourth operation, B will become empty first.
So the total probability of A becoming empty first plus half the probability
that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.

exam2

Input: n = 100
Output: 0.71875


Constraints:

0 <= n <= 109


*/

// 풀이 실패
// 풀이 참조 https://leetcode.com/problems/soup-servings/solutions/121711/c-java-python-when-n-4800-just-return-1/?orderBy=hot


/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n > 4800) return 1;

  const memo = new Map();
  const prob = (a, b) => {
    const key = a + ',' + b;
    if (memo.has(key)) return memo.get(key);
    if (a === 0 && b !== 0) return 1;
    if (a === 0 && b === 0) return 0.5;
    if (a !== 0 && b === 0) return 0;

    let p = prob(100 > a ? 0 : (a - 100), b) +
      prob(75 > a ? 0 : (a - 75), 25 > b ? 0 : (b - 25)) +
      prob(50 > a ? 0 : (a - 50), 50 > b ? 0 : (b - 50)) +
      prob(25 > a ? 0 : (a - 25), 75 > b ? 0 : (b - 75));

    p *= 0.25;

    memo.set(key, p);

    return p;

  }

  return prob(n, n);
};