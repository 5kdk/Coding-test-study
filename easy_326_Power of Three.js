/* 
문제 url: https://leetcode.com/problems/power-of-three/


정수 n이 주어지면 3의 거듭제곱이면 true를 반환한다. 그렇지 않으면 false를 반환한다.
n == 3 x제곱인 정수 x가 존재할 경우, 정수 n은 3의 거듭제곱이다.


exam 1
Input: n = 27
Output: true
Explanation: 27 = 33

exam2
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

exam 3
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

Constraints:
-2 31제곱 <= n <= 2 31제곱 - 1

Follow up: Could you solve it without loops/recursion?

*/

// while

// 숫자 n이 숫자 b의 거듭제곱인지 알아내는 간단한 방법은 나머지가 0인 동안 계속해서 n을 b로 나누는 것

var isPowerOfThree = function (n) {
  while (n % 3 === 0 && n > 1) {
    n /= 3;
  }
  return n === 1;
};

// 타입 변환

//n의 거듭제곱을 n진수로 표현하면 1000n과 같이 가장 큰 자리수만 1이고 나머지는 모두 0인 숫자의 패턴
// Number.prototype.toString(n) 숫자를 입력받은 n진수의 문자열로 변환
// String.prototype.match() 문자열의 일치여부를 판단

var isPowerOfThree = function (n) {
  return Boolean(n.toString(3).match(/^10*$/));
};


// log 접근

// 로그 개념을 활용하는 방법
// 3의 거듭제곱인 수 n에 대한 log3(n)의 값은 정수라는 성질을 이용하는 것입니다.
// log3(n)은 아래와 같이 밑변환 공식을 사용하여 계산합니다.

var isPowerOfThree = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};


// 정수 limit 접근

// 표현할 수 있는 가장 큰 3의 거듭제곱을 입력값 n으로 나누는 방법
// 우선 표현할 수 있는 범위 중에서 가장 큰 3의 거듭제곱 구하기
// JS에서 수의 최대값 JS에서는 2 53제곱 - 1 (Number.MAX_SAFE_INTEGER)
// 이 범위 안에서 가장 큰 3의 거듭제곱은 3의 33제곱 = 5559060566555523
// 주어진 n이 3의 거듭제곱이라면 3의 33제곱을 나눴을 때 나머지는 0

var isPowerOfThree = function (n) {
  return n > 0 && 5559060566555523 % n === 0;
};
