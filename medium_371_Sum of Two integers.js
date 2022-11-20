// 문제
// 두 정수 a와 b가 주어지면 연산자 +와 -를 사용하지 않고 두 정수의 합을 반환합니다.

// 예제
// Input: a = 1, b = 2
// Output: 3


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

//  xor 더하기 => 덧셈 "+" 연산을 사용하지 않고 비트연산을 통해 두 2진수를 더하는 원리

var getSum = function(a, b) { // a= 2(010), b= 3(011)
    let carry;
    while((a & b) !== 0){
        carry = (a & b) << 1;  // 010 & 011 = 100 //and연산자: 두 값이 1이면 1, 나머지는 0 
        a = a ^ b; // 001(1) //  XOR연산자 : 두 값이 같으면 0, 아니면 1
        b = carry; // 100(4)
    }
    return a ^ b; // 101(5)
};