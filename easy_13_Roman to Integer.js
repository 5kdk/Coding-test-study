
/* 문제정보
로마자로 구성된 문자열 s가 매개변수로 주어집니다.
각 로마자에 대응되는 value를 기반으로 로마자를 정수로 변환하여 리턴합니다.
로마자는 큰것에서 작은것 순으로 표기하지만 
작은수가 큰수보다 앞에 있는 경우 작은수는 뺄셈으로 작용합니다. 

ex : IV = 5 - 1 = 4

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


example
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

해당 문제 링크
https://leetcode.com/problems/roman-to-integer/

*/

var romanToInt = function(s) {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    value = 0;
    for(let i = 0; i < s.length; i++){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};

/* 문제 조건과 풀이 방법 다른사람의 풀이

조건
1. 작은밸류의 symbol이 큰밸류의 symbol 앞에 있는 경우를 고려해야합니다.
2. 답은 정수형태로 반환되어야합니다.

풀이방법
1. 객체를 이용한 해시테이블을 기반으로 문제를 풉니다.
2. 삼항연산자를 이용해 작은 symbol이 큰 symbol 앞에 있는 경우를 처리합니다.


특이사항
1. index가 length값보다 큰 경우는 undefined가 리턴됩니다.

다른사람의 풀이

const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};
obj를 선언하는 대신 Map을 선언하여 문제를 푸는 솔루션입니다.

*/
