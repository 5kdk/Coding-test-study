
/* 문제정보

요소가 문자열로 이루어진 배열 words가 주어집니다.
각 요소가 키보드 한줄로 칠 수 있는 경우 그 요소를 담은 배열을 리턴해주세요

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".


example
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

해당 문제 링크
https://leetcode.com/problems/keyboard-row/

*/

var findWords = function(words) {
    let row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let answer = [];
    
    words.forEach(x => {
        let spliter = x.toLowerCase().split('');
        
        if(spliter.every(j => row1.includes(j))) answer.push(x)
        if(spliter.every(j => row2.includes(j))) answer.push(x)
        if(spliter.every(j => row3.includes(j))) answer.push(x)
    })
    
    return answer;
};


/* 풀이방법
  .every()메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하며
  boolean값을 반환함 .every()는 콜백함수에요! 모든 요소가 참인 경우 true를 반환합니다.

  .includes()메서드는 배열이 항목 사이에 특정 값을 포함하는 여부를 확인하여
  boolean값을 반환함 .includes는 fromindex를 지정해주지않으면 인덱스 0부터 끝까지 순회하면서
  해당 값이 있는지를 찾는 메서드입니다.

  .forEach()메서드는 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드임

  즉 각 요소를 forEach()메서드를 통해서 각각의 요소들을
  spliter라는 변수에 모두 소문자로 만들고 하나하나쪼개진 배열로 만들어서 할당시켜줍니다.
  
  그러니까 매개변수가 이렇게 주어진다면 ["Hello","Alaska","Dad","Peace"]
  spliter된 시점에서 각 요소들의 상태는 이렇습니다.

  [ 'h', 'e', 'l', 'l', 'o' ]
  [ 'a', 'l', 'a', 's', 'k', 'a' ]
  [ 'd', 'a', 'd' ]
  [ 'p', 'e', 'a', 'c', 'e' ]

  이 상태에서 every의 모든 요소 j를 각각 row1.includes(j)에 넣고 검사합니다.
  그러면 만약 j가 row1에 includes인 경우 true의 형태로 배열에 담기게되겠죠!
  그 과정을 각 요소에 모두 반복한 뒤 모든 배열요소가 true의 형태가 되어있다면
  every는 true를 반환할것입니다.

  그리고 if문을 통해 every가 true를 반환할시 answer배열에 x를 push해주면
  아무런 가공이 되지않은 문자열의 형태로 answer배열에 push되는 원리에요!!

*/