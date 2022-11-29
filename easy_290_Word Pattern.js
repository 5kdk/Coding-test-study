/* 
문제 url: https://leetcode.com/problems/word-pattern/


패턴과 문자열 s가 주어지면 s가 동일한 패턴을 따르는지 확인합니다.
여기서 follow는 패턴의 문자와 s의 비어 있지 않은 단어 사이에 이항이 있는 완전 일치를 의미합니다.

ps.
전단사는 '전사이면서 단사'라는 뜻이다.
전단사 bijection 의 bi-는 양쪽 모두를 뜻한다.
두 조건 모두를 만족시켜야 한다는 의미이다.
정의역의 모든 원소가 각기 다른 1개로 대응하면서,
공역 전체로 대응하는 완벽한 대응이다.
그런 뜻으로 일대일 대응이라고 부르기도 한다.


exam 1
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

exam2
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

exam 3
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

// 공백으로 문자열 잘라서 배열로 만들기
// pattern과 문자열 배열 length를 비교하고 다르면 false 반환
// pattern Map 생성
// str Map 생성
// forloof 로 탐색

// false 조건
// pMap 이 pattern[i]를 가지고 있고, pMap의 pattern[i]가 sArr[i]가 다른 경우
// OR
// sMap 이 sArr[i]를 가지고 있고, sArr의 sArr[i]가 pattern[i] 같지 않은 경우
// 각 맵에 key value set으로 추가

// foorloof 완료 -> true


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (sArr.length !== pattern.length) return false;

  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (
      (pMap.has(pattern[i]) && pMap.get(pattern[i]) !== sArr[i]) ||
      (sMap.has(sArr[i]) && sMap.get(sArr[i]) !== pattern[i])
    ) {
      return false;
    }
    pMap.set(pattern[i], sArr[i]);
    sMap.set(sArr[i], pattern[i]);
  }
  return true;
};


// 실패코드
// "dog dog dog dog" 일때 생각

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (sArr.length !== pattern.length) return false;

  const pMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (pMap.has(pattern[i]) && pMap.get(pattern[i]) !== sArr[i]) return false;
    pMap.set(pattern[i], sArr[i]);
  }
  return true;
};
