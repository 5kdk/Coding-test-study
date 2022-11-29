// 문제
// 문자열 s가 주어지면 s에서 가장 긴 회문 부분 문자열을 반환합니다.
// 1 <= s.length <= 1000 s는 숫자와 영문자로만 구성됩니다.

// 예시
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// 풀이방법

/**
 * @param {string} s
 * @return {string}
 */

// 홀수 펠린드롬, 짝수 펠린드롬이라는 두가지 경우의 수가 있음
// 펠린드롬이란?
// : 해당 문자열이 뒤집었을 때와 서로 같은 문자열을 뜻한다. 예를 들어, aba를 뒤집었을 때도 aba 이므로 aba는 펠린드롬이다.


const longestPalindrome = (s) => { s : 'babad'
  let answer = s[0]; // b
  const N = s.length; // 5

  for (let i=0; i < N; i++) { i= 0, 1, 2, 3, 4
    // 끝점, 지금까지 나온 펠린드롬중 가장 긴 값이 answer이므로 끝점은 시작점에 answer의 길이만큼 더해 시작하면서 시간효율을 높힘
    for (let j=i+answer.length; j < N; j++) { // j: 1, 2, 3, 4
      if (s[i] === s[j] && isPalindrome(s, i, j) ) { // 조건 : 만약에 s[i]와 s[j]가 같고 펠린드롬이면
        answer = s.slice(i, j+1); // bab
      } 
    }
  }                           
  return answer; // bab
};

// 펠린드롬 체크 함수
const isPalindrome = (string, left, right) => { // babad, 1, 1
  let returnIsPalindrome = true; // 펠린드롬인지 표시
  while (left < right) { // 왼쪽보다 오른쪽이 클때까지 반복
    if (string[left] !== string[right]) {
      returnIsPalindrome = false;
      break
    }
    left++;
    right--;
  }
 
  return returnIsPalindrome;
}
