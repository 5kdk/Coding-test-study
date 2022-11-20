/*
https://leetcode.com/problems/pascals-triangle-ii/
문제 Easy 119. Pascal's Triangle II

정수가 주어지면 파스칼 삼각형의 ( 인덱스가 0인 ) 행 rowIndex를 반환합니다. rowIndexth 파스칼의 삼각형 에서 각 숫자는 다음 과 같이 바로 위에 있는 두 숫자의 합입니다.

Example 1.
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2.
Input: rowIndex = 0
Output: [1]

Example 3.
Input: rowIndex = 1
Output: [1,1]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
testcase:
3
*/

var getRow = function (rowIndex) {
  let row = []; // rowIndex 값에 따라 반환해줄 row를 빈 배열로 선언해준다.

  if (rowIndex < 0) return row; // rowIndex값이 0보다 작을경우 빈배열 반환.

  row.push(1); // 새로운 줄은 항상 1로 시작하므로 1을 푸시해준다.
  console.log(row); // output: [ 1 ]

  for (let i = 1; i <= rowIndex; i++) {
    // rowIndex = 0 값인 [1]은 위에서 선언이 되었으므로 인덱스값 1 (i = 1)부터 시작해준다.

    for (let j = row.length - 1; j > 0; j--) {
      // 새로 추가해야할 요소는 = 이전 열의 길이 - 1,
      // ex. [ 1, 1 ] -> row.length = 2
      //     [ 1, 2, 1 ] -> 새롭게 추가되는 요소는 [ 2 ]로, 1개가 된다. (row.length = 2) - 1

      row[j] = row[j - 1] + row[j];
      // 새로 추가되는 인덱스 값은 이전 열의 같은 인덱스 값 + 이전 인덱스 값
      // ex. [ 1, 2, 1 ] -> row[0] + row[1] = 1 + 2 = 3
      // 	   [ 1, 3, 3, 1] -> row[1] = 3
    }
    row.push(1); // 열은 항상 1로 끝나므로 1을 푸시해준다.
    console.log(row);
    // output: [ 1 ]
    //     [ 1, 1 ]
    //	   [ 1, 2, 1 ]
    //	   [ 1, 3, 3, 1 ]
  }
  return row;
};
