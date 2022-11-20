/*
https://leetcode.com/problems/pascals-triangle/
문제 Easy 118. Pascal's Triangle

정수가 주어지면 파스칼 삼각형numRows 의 첫 번째 numRows를 반환합니다. 파스칼의 삼각형 에서 각 숫자는 다음 과 같이 바로 위에 있는 두 숫자의 합입니다.

Example 1.
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2.
Input: numRows = 1
Output: [[1]]

1. 인덱스 값을 기준으로 for 반복문을 실행해준다.

2. 새로운 row에 추가되는 요소의 값은 prevRow의 현재 인덱스 값 [ j ]와 이전 인덱스 값[ j - 1 ]의 합
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
testcase:
5
*/

var generate = function (numRows) {
  let triangle = []; // 전체 row가 담겨 반환시켜줄 빈 배열을 선언해준다.

  if (numRows < 1) return triangle; //numRows가 1보다 작으면 빈배열을 반환한다.

  triangle.push([1]); // 첫번째 줄을 푸시해준다.
  console.log(triangle);
  // output: [ [ 1 ] ]

  for (let i = 1; i < numRows; i++) {
    // numRows를 for문으로 돌려준다.
    // first row는 triangle.push([1]) 푸시를 통해 만들어 주었기 때문에 i = 1부터 시작.

    let prevRow = triangle[i - 1]; // 현재 줄의 전 줄은 triangle[i - 1]
    let newRow = []; // 새로 생성될 줄을 빈배열로 선언해준다.

    newRow.push(1); // 새로운 줄은 항상 1로 시작하므로 1을 푸시해준다.
    console.log(newRow);
    // output: [ 1 ]
    //  	    [ 1 ]
    //  	    [ 1 ]
    //  	    [ 1 ]

    for (let j = 1; j < prevRow.length; j++) {
      // 새로운 줄의 값을 구하기 위해 prevRow를 반복문으로 탐색해준다

      newRow[j] = prevRow[j] + prevRow[j - 1];
      // 새로운 줄에 추가되는 요소의 값은
      // 이전 줄에 해당하는 인덱스 값 [j] 와 그 앞의 인덱스 값 [j-1]이 더해진 값이 된다.
    }

    newRow.push(1);
    // 새로운 요소가 추가된 상태에서 마지막 요소는 항상 1이므로 1을 추가로 푸시해준다.
    console.log(newRow);
    // output: [ 1, 1 ]
    //         [ 1, 2, 1 ]
    //         [ 1, 3, 3, 1 ]
    //         [ 1, 4, 6, 4, 1 ]

    triangle.push(newRow);
    // 위에서 첫번째줄을 선언해둔 triangle에 새롭게 추가해준 row들과 합쳐준다.
  }
  return triangle; // 합쳐진 배열의 열들을 반환해준다.
};
