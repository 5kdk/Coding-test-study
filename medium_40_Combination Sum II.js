/* 
문제 url: https://leetcode.com/problems/combination-sum-ii/


후보 번호(후보)와 목표 번호(대상)의 집합이 주어지면 후보 번호가 목표값과 합한 후보에서 모든 고유한 조합을 찾습니다.
후보의 각 숫자는 조합에서 한 번만 사용할 수 있습니다.
참고: 솔루션 세트에는 중복된 조합이 포함되지 않아야 합니다.

exam 1
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

exam2
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

Constraints:
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

Related Topics
Array
Backtracking

*/

// 길종님 문제 combination Sun과 유사 중복만 없음

var combinationSum2 = function (candidates, target) {
  if (!candidates || candidates.length == 0) return [];
  let res = [];
  candidates.sort((a, b) => a - b);
  const dfs = function (curSum, cur, idx) {
    if (curSum == target) {
      res.push([...cur]);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (i != idx && candidates[i] == candidates[i - 1]) continue; // 이미 반환됨, 다음 루프로 이동(재귀 아님)
      if (curSum > target) return;
      cur.push(candidates[i]);
      dfs(curSum + candidates[i], cur, i + 1);
      cur.pop();
    }
  };
  dfs(0, [], 0);
  return res;
};