// 문제설명
// 당신은 계단을 오르고 있습니다. 정상에 도달하려면 n걸음이 걸립니다. 
// 매번 1단계 또는 2단계를 오를 수 있습니다.
// 얼마나 많은 독특한 방법으로 정상에 오를 수 있습니까?


// 예제
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps


// 풀이방법
// 1. 피보나치 수열을 이용한 방법 ==> 시간초과 
/**
 * @param {number} n
 * @return {number}
 */
//  var climbStairs = function(n) { // 2
//     if(n <= 1) return 1;
//    return climbStairs(n-1) + climbStairs(n-2);
//     // 1 2
//     //    f(2) = 0 + 1
//     //    f(1) =  1
//     //    다시 거슬러 올라오면서 계산
//   };

//   ==> 1. 재귀 호출 -> 반복믄으로 바꾸기 
//          그리고 반복 루프 내에서 원하는 단계 수(n)까지 
//        주어진 n(2에서 시작)에 대한 새로운 해시 값을 생성할 것.

// 2. 해시 테이블을 사용해 이전 값을 미리 저장해두어 두번 계산 안하도록 함,
const cache = {
    "0": 1,
    "1": 1,
  };
  
  const climbStairs = function (n) { // n = 3 
    if (n <= 1) return 1; // 종료조건
    for (let i = 2; i <= n; i++) { // 2  
      cache[i] = cache[i - 1] + cache[i - 2];  //  3
     }
     console.log(cache); // { '0': 1, '1': 1, '2': 2, '3': 3 }
    return cache[n]; // 8
  };

console.log(climbStairs(3));  
  