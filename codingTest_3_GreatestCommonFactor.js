// 배열 A에는 0보다 큰 숫자가 N개 들어있습니다.
// 모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요.

// [입력]
// 0보다 큰 정수가 들어있는 배열 A

// [출력]
// 배열 A의 모든 정수를 아우르는 최대 공약수

// 우선 최대공약수란? : 두 수, 혹은 그 이상의 여러 수의 공통인 약수 중 가장 큰 수

function solution(A) { // [6, 12, 14]
    var max = -Infinity;
    var min = Infinity;
    // 1. 먼저 배열 안에서 최댓값과 최소값을 구해놓은 뒤 함수를 호출한다.
    for(var i of A){ // 6, 12, 14
        max = Math.max(max,i); // 14
        min = Math.min(min,i) // 6
    }
    return gcd(min, max) // 6, 14
}

// 최대공약수 구하기
// 재귀함수를 이용하여 수를 작게 줄여 나갑니다. 
function gcd(a, b){ 
    if(b == 0) return a; // 2
    return gcd(b, a % b) // 14,6 / 6,2 / 2, 0 / 2 출력
}
// 따라서 6, 12, 14의 최대 공약수는 2이다. 

// testCase
let input = [[6, 12, 14]];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}