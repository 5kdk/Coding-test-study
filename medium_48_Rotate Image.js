/*
https://leetcode.com/problems/rotate-image/
문제 Medium 48. Rotate Image

n x n이미지를 나타내는 2D 가 주어지면 matrix이미지를 시계 방향으로 90 도 회전합니다. 이미지를 제자리에서 회전해야 합니다. 다른 2D 매트릭스를 할당하고 회전하지 마십시오.

Example 1.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2.
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
testcase:
[[1,2,3],[4,5,6],[7,8,9]]
*/

/*
1. for문을 이용하여 행과 열을 바꿔준다.

2. 이 때, 2차원 배열의 행과 열 바꾸기를 통해 서로 바꿔줄 수 있다.

3. 바꾼 결과값을 reverse()를 이용해서 대칭으로 뒤집어주면 원하는 시계방향으로 90도 회전된 모습을 반환시킨다.
*/

var rotate = function (matrix) {
  // row와 column을 맞바꿔준다.
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  // 대칭으로 뒤집어준다. (reverse)
  for (let row of matrix) {
    row.reverse();
  }
};
