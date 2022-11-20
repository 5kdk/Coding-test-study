// 문제 4
// [문제 설명]
// 전 세계의 알파벳들이 기차놀이를 하기 위해서 한 장소에 모였습니다.
// 뒤죽박죽 같은 스펠링의 알파벳들도 섞여 들어가 있습니다.
// 여기에서 반복 없이 가장 긴 알파벳 길이를 구하는 함수, solution을 완성해주세요.

// 예를 들어, 문자열 s가 abssccbsbsv 일 때, 반복 없이 가장 긴 알파벳 길이는 3입니다.

// [제한 사항]

// 기차놀이의 참가한 알파벳은 중복될 수 있습니다.
// 반복 없는 가장 긴 문자열을 찾습니다.
// [입력 형식]

// s는 길이가 1 이상 1,000 이하인 문자열입니다.
// [출력 형식]

// 반복 없이 가장 긴 알파벳 길이를 출력합니다.


function solution(s) {
  let sliceStr = []; // 잘라낼 문자열 담을 변수
  let lastStr = 0; // 마지막 문자열 세는 변수

  for (let i = 0; i < s.length; i++) {
    // 1. s의 길이만큼 반복한다.

    if (sliceStr.indexOf(s[i]) === -1) {
      // 만약에 sliceStr에 S[i]와 일치하는 값이 없다면
      sliceStr.push(s[i]); // 문자열 하나를 push //a, b, s

    if (lastStr < sliceStr.length) {
        // 만약에 lastStr가 sliceStr의 길이보다 작다면
        lastStr = sliceStr.length; // sliceStr의 길이만큼 할당 // 3
      }
    } else { // 아니면 sliceStr에서 뒤에서 인덱스 마지막 한 개씩 slice한다. 
      sliceStr = sliceStr.slice(sliceStr.indexOf(s[i]) + 1); // s
      sliceStr.push(s[i]); // 
      console.log(s[i]); // s, s
    }
    // console.log(sliceStr);
    // ["a"][("a", "b")][("a", "b", "s")];
    // s["s"][("s", "c")];
    // c["c"][("c", "b")][("c", "b", "s")];
    // b[("s", "b")];
    // s[("b", "s")][("b", "s", "v")];

  }
  return lastStr; // 3
}


//testcase
let input = ["abssccbsbsv"];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}