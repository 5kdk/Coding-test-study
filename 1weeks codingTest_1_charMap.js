// 문제 1번
// [문제 설명]
// 숫자로 이루어진 문자열 s가 있습니다. 이 문자열에서 가장 많이 등장하는 수를 출력하는 함수, solution을 완성해주세요.
// 예를 들어, s가 '104001100'로 주어질 때, 가장 많이 등장하는 수는 0입니다.

// [제한 사항]
// \- 가장 많이 등장하는 수가 여럿인 경우\, 그 중 가장 작은 수를 출력합니다\.
// [입력 형식]
// \- s는 길이가 1 이상 100 이하의 문자열입니다\.
// \- s는 숫자로 구성됩니다\.
// [출력 형식]
// \- 가장 많이 등장하는 수를 출력합니다\.

function solution(s) {
  const charMap = {}; // 수의 나오는 횟수 담을 객체 변수
  let max = 0; // 가장 많이 나오는 수세는 변수
  let maxChar = ""; // 가장 많이 나오는 수 담을 변수

  // 1. 배열 안에 들어있는 문자열을 반복한다.
  // for .. of : 반복 가능한 객체에 대해 반복한다.
  for (let char of s) {
    // char : 1, 0, 4, 0, 0, 1, 1, 0, 0
    // 2. 문자열의 갯수를 세어준다.
    if (charMap[char]) { // 있으면
      charMap[char]++; // 카운트 증가
    } else {
      // 아니면 키 생성
      charMap[char] = 1;
    }
    //   console.log(charMap);
    // { '1': 1 }
    // { '1': 2 }
    // { '1': 2, '4': 1 }
    // { '0': 1, '1': 2, '4': 1 }
    // { '0': 2, '1': 2, '4': 1 }
    // { '0': 2, '1': 3, '4': 1 }
    // { '0': 2, '1': 4, '4': 1 }
    // { '0': 3, '1': 4, '4': 1 }
    // { '0': 4, '1': 4, '4': 1 }
  }

  // 3. 가장 많이 나온 수를 maxChar에 할당하고 리턴한다.
  for (let char in charMap) {
    // char : 0, 1, 4 / charMap : {'0': 4, '1': 4, '4': 1 }
    if (charMap[char] > max) {
      max = charMap[char]; // 4
      maxChar = char; // 0
    }
  }

  return Number(maxChar); // 0
}

// testcase
let input = ["114001100"];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
