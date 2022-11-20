// 문제5
// [문제 설명]
// 문자열 s가 주어집니다. s가 pangram 인지 판단하는 함수, solution을 완성해주세요.
// pangram이란 모든 알파벳이 사용된 문장을 말합니다.

// [입력 형식]
// - s는 길이가 1 이상 1,000 이하인 문자열입니다.
// - s는 소문자 알파벳과 공백(' ')으로만 구성됩니다.

// [출력 형식]
// - 문자열이 pangram인지 구합니다.


function solution(s) {
    let answer = true;
    let str = s.toLowerCase().replace(/[^a-z]/g,'') // 정규표현식 abcdefghijklmnopqrstuvwxyz  // replace함수 : str.replace("찾을 문자열", "변경할 문자열")
    const toArr = [...new Set(str)] // spread reteral(...)와 set 함수를 이용해 str가 들어간 새로운 배열을 생성한다.
    // set 객체를 사용힌 이유(특징)
    // set 객체는 다음과 같은 특징을 가진다.
    // 동일한 값을 중복하여 포함할수 없다
    // 요소 순서에 의미가 없다
    // 인덱스로 요소에 접근할 수 없다.

    // [
    //     'a', 'b', 'c', 'd', 'e', 'f',
    //     'g', 'h', 'i', 'j', 'k', 'l',
    //     'm', 'n', 'o', 'p', 'q', 'r',
    //     's', 't', 'u', 'v', 'w', 'x',
    //     'y', 'z'
    //   ]
    return toArr.length === 26 ? answer = true : answer = false; // 배열의 길이가 26이면 true, 아니면 false  // 값은 true
};


//testcase
let input = ["abcdefghijklmnopqrstuvwxyz"];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
