/* 
문제 url: https://leetcode.com/problems/nim-game/



친구와 함께 다음 Nim 게임을 하고 있습니다.

처음에는 탁자 위에 돌무더기가 놓여 있습니다.
당신과 당신의 친구는 교대로 번갈아가며 당신이 먼저 갑니다.
매 차례마다 차례가 된 사람은 더미에서 1~3개의 돌을 제거합니다.
마지막 돌을 제거하는 사람이 승자입니다.
n이 주어졌을 때,
당신과 당신의 친구가 최적으로 플레이한다고 가정하고 게임에서 이길 수 있으면 true를 반환하고,
그렇지 않으면 false를 반환합니다.


exam 1
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.

exam2
Input: n = 1
Output: true

exam 3
Input: n = 2
Output: true


*/

// 코테때 나온 깃발문제와 같은 문제네요
// 두사람 모두 최적의 플레이를 한다고 가정했기 때문에
// 주어지는 n값을  4로 나누었을때 나머지가 0인 아닌 경우에는 무조건 친구가 이길 수 있습니다. 

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0
};