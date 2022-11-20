// [문제 설명]
// 알파벳 대/소문자와 숫자 그리고 구분자인 마침표("."), 쉼표(","), 느낌표("!"), 물음표("?"), 스페이스(" ")로 이뤄진 문장이 있습니다. 문장 내에는 구분자를 기준으로 단어를 구분합니다.
// 문장 s가 주어질 때, 단어를 거꾸로 출력하는 함수, solution을 완성해주세요.
// 예를 들어, 문장 "Hello, World!?"가 주어진다고 가정할 때, 구분자를 기준으로 구분된 단어는 "Hello", "World"이며, 단어를 거꾸로 출력한 결과는 ["olleH", "dlroW"] 입니다.

// [입력 형식]
// - s는 길이가 1 이상 1000 이하의 문자열입니다.

// [출력 형식]
// - 단어를 거꾸로 치환한, 문자열로 이뤄진 배열을 출력합니다.
// - 비어있는 단어는 제거하고 출력합니다.


function solution(s) {
    let strSplit = s.split(/[.,!? ]/); // 1. 정규표현식을 사용하여 구분자를 제거해 줍니다. [ 'Hello', '', 'World', '', '' ]
    return strSplit.filter((val) => val !== '').map(val => val.split('').reverse().join('')) 
    // 2. filter를 사용하여 ""이 아닌 경우만 새로운 배열로 반환해줍니다.[ 'Hello', 'World' ]
    // 3. 새로운 배열에 map을 사용하여 글자를 split를 나누고 [ [ 'H', 'e', 'l', 'l', 'o' ], [ 'W', 'o', 'r', 'l', 'd' ] ]
    // 4. 한 철자씩 reverse를 이용해 뒤집어주고  [ [ 'o', 'l', 'l', 'e', 'H' ], [ 'd', 'l', 'r', 'o', 'W' ] ]
    // 5. 다시 join을 해서 문자열로 합쳐서 반환해줍니다. [ 'olleH', 'dlroW' ]
}

// testCase
let input = ["Hello, World!?"];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}

