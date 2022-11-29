
/* 문제정보
정수로 이루어진 배열 digits이 매개변수로 주어집니다.
digits[i]는 각각 정수의 자릿수를 의미하며 숫자는 왼쪽에서 오른쪽 순서로 정렬됩니다.
마지막 배열에 1을 더하고 결과를 정수로 이루어진 배열 형태로 반환합니다.

해당 문제 링크
https://leetcode.com/problems/plus-one/

*/


var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
      if(++digits[i] > 9) {
        digits[i] = 0;
        console.log(digits)
      }
      else return digits;
    }
    digits.unshift(1);
    return digits;
  };

  /* 조건

  조건
  1. 마지막 정수가 9인 경우를 고려해야합니다.
  2. 답은 정수 배열 형태로 반환되어야 합니다.
  3. 배열 내 모든 요소가 9인 경우를 고려해야합니다.


  */

console.log(plusOne([1,9,9]))