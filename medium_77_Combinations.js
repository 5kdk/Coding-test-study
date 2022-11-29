/* 
정수 n, k 매개변수로 주어짐
조합 구현 / 순서만 다른 경우 동일한 조합으로 간주
각 배열요소는 k개의 길이를 가지며
1부터 n까지의 조합을 반환해야함.


example
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

문제링크
https://leetcode.com/problems/combinations/
*/

var combine = function (n, k) {
    const output = []; // 2차원배열 리턴을 위한 output 변수에 빈 배열 선언
  
    const backtracking = (current, startNumber, k) => {
      // 재귀 선언 , 꼬리재귀형태구현 / i값을 for문 외부에서도 사용하기위해 startNumber선언
      if (n - startNumber + 1 < k) return; // 백트래킹을 위한 종료코드인듯한데 정확한 원리 모르겠음
      if (k === 0) return output.push(current); // 꼬리재귀 종료조건 설정
  
      for (let i = startNumber; i <= n; i++) {
        const newCurrent = [...current]; // 마지막배열만 없애고 나머지 배열은 유지하기위해 부분적으로 초기화.
        newCurrent.push(i); // 배열에 조합 push
        backtracking(newCurrent, i + 1, k - 1); // 재귀호출
      }
    };
    backtracking([], 1, k); // combine 함수를 호출하는 형식이기 때문에 combine 함수에서 backtracking 함수를 호출해줘야 backtracking이 동작함
  
    return output; // 정답 반환
  };
  
  /* 풀이방법
  1. 재귀를 이용한 백트래킹 추적
  
  */