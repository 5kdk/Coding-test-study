
/* 문제정보
정수 n이 매개변수로 주어집니다.

n이 만약 2의 거듭제곱수라면 true를
아니라면 false를 반환하세요.



해당 문제 링크
https://leetcode.com/problems/power-of-two/

*/

var isPowerOfTwo = function(n) {
    return (Math.log2(n) % 1 === 0);
};

/*
Math.log2()는 세퍼레이터를 진수로하고 2를 밑으로하는 로그계산 결과를 반환합니다.
만약 숫자가 음수라면 NaN을 반환합니다.

2의 거듭제곱인 수가 아니라면 Math.log2(n)을 했을 때 값이 딱 떨어지지않고
소수점값이 생겨나고 반대로 2의 거듭제곱이라면 값이 딱 떨어질것입니다.

그렇기 때문에 나누기 1을 했을 때 나머지가 0이라면 그 수는 거듭제곱입니다.
*/