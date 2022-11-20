// 191. Number of 1 Bits
// 문제
// 부호 없는 정수를 받아 '1' 비트 수(해밍 가중치라고도 함)를 반환하는 함수를 작성하십시오

// // 예제
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.


// 풀이방법
/**
 * @param {number} n - a positive integer
* @return {number}
*/
// 입력된 정수 n을 binary code로 표기한다면 int형 데이터의 크기는 4 byte이므로 32자리의 수가 될 것입니다.

// 반복문을 통해 각 자리를 순회하면서 값이 1인지 판단해 1이 나온 횟수를 도출합니다.
var hammingWeight = function(n) {
 let bits = 0;
 let mask = 1;
 for(let i = 0; i < 32; ++i) { // i : 0 ~ 31
   bits += n & mask;  // n이랑 mask = 1이랑 and연산자 이용해서 bits 변수에 할당(& : 모두 1일경우 1반환)
   // bits = 3
   n >>= 1; // 오른쪽 SHIFT (<<) 연산자는 모든 비트를 오른쪽으로  1 칸씩 이동시킵니다. 이동 범위를 초과하는 값은 버려지고, 새로 생긴 빈 칸은 0으로 채워집니다.
 }
 return bits;
};