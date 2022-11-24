
/* 문제정보
32bit 값 이내의 정수 x 가 매개변수로 주어집니다.
주어진 정수값을 뒤집은 형태의 정수로 답을 return하며 이때
뒤집은 정수값이 32bit 값을 초과한다면 0을 return 해야합니다.

example
Input: x = 123
Output: 321
Input: x = -123
Output: -321
Input: x = 120
Output: 21


해당 문제 링크
https://leetcode.com/problems/reverse-integer/

*/


var reverse = function(x) {
    let reverseabs = Number(Math.abs(x).toString().split('').reverse().join(''))
    if(reverseabs > 2147483647) {
        return 0
    }
    return x < 0 ? - reverseabs : reverseabs
};

/* 문제조건 및 풀이

조건
1. 예외케이스로 정수를 뒤집었을때 값이 32bit 를 초과하면 0을 return 시켜야합니다.
2. 뒤집었을 때 숫자 0앞에 1이상의 정수가 없는 경우 0은 값에 포함되어선 안됩니다.
3. 음수가 주어졌다면 답또한 음수로 반환되어야합니다.

풀이방법
1. 절댓값을 구해주는 함수 Math.abs()를 이용해 -부호를 제거합니다.
2. 숫자를 뒤집어주기 위해 문자열 배열로 만들고 값을 뒤집은 뒤 Number()를 이용해 정수로 type을 바꿔줍니다. 
3. 예외케이스를 처리하기 위한 if문을 작성합니다. 2147483647은 32비트에서 최대로 표현될 수 있는 수입니다.
4. 삼항 연산자를 이용해 처음 매개변수로 주어진 x의 값을 비교한 뒤 음수면 - 부호를 붙여주고 답을 return 합니다.

*/