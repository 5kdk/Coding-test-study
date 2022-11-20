// 문제3
// 문자열 S는 하나의 단어를 나타냅니다.
// 단어를 거꾸로 뒤집어도 똑같은 것을 회문이라고 합니다.

// 주어진 단어가 회문인경우 1, 아닌경우 0을 리턴하는 함수를 구현하세요.

// [입력]
// 1000자 미만의 문자열 S (알파벳 대문자)

// [출력]
// 회문 인경우 1, 그렇지 않은 경우 0

function solution(S) {
    const s = S.split('').reverse().join(''); // 문자열을 나누고 reverse를 이용해 뒤집어준 다음 join을 이용해 다시 븥여준다.
    if(S === s){
        return 1; // 회문이면 1리턴
    } else {
        return 0; // 아니면 0리턴
    }
}

// testcase
let input = ["MEEM"];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}