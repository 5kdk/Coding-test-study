/* 

문제 url https://leetcode.com/problems/first-unique-character-in-a-string/ 



문자열 s가 주어지면 그 안에 있는 첫 번째 비반복 문자를 찾아 인덱스를 반환합니다. 존재하지 않으면 -1을 반환합니다.


exam 1
Input: s = "leetcode"
Output: 0

exam2
Input: s = "loveleetcode"
Output: 2

exam3
Input: s = "aabb"
Output: -1


제약조건
1 <= s.length <= 105
s consists of only lowercase English letters.

*/


// 스프레드한 문자열을 reduce 함수로 카운팅된 오브젝트를 생성
// 오브젝트의 value가 1인 key를 찾고 unique에 할당
// unique에 할당된 값이 undifined 이면 -1 반환하고 아닐경우 문자열 s에 indexOf 로 unique의 첫번째 인덱스를 반환

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

  const obj = [...s].reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++
    } else {
      acc[curr] = 1;
    }
    return acc
  }, {})

  const unique = Object.keys(obj).find(key => obj[key] === 1);
  
  return unique === undefined ? -1 : s.indexOf(unique);
};