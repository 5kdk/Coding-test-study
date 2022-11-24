/* 문제정보

1과 0으로 이루어진 정수 배열 flowerbed와 정수 n이 매개변수로 주어집니다.
1은 이미 꽃이 심어져있는 상태 0은 꽃을 심을 수 있는 상태를 의미합니다.
꽃을 심기위해서는 인접한 곳에 다른 꽃이 없어야합니다.
만약 n개만큼의 꽃을 모두 심을 수 있다면 true를
그렇지못하다면 false를 반환하는 문제입니다.

example

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
문제링크
https://leetcode.com/problems/can-place-flowers/
*/

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
      if (
        flowerbed[i] === 0 &&
        flowerbed[i - 1] !== 1 &&
        flowerbed[i + 1] !== 1
      ) {
        n--;
        i++;
      }
    }
    return n === 0;
  };

/* 문제정보
  간단한 풀이방법입니다. for문을 돌리는데 n이 0이 아니면서 i < flowerbed의 length일때까지 for문을 순회합니다.
  만약 인덱스 i가 0이면서 양옆의 요소가 1이 아닌경우 n을 1빼주고 i를 1증가시켜줍니다.
  i++을 해줘야하는 이유는 배열요소를 직접 건드리는게 아니기때문에 꽃을 심고 다음 인덱스를 건너 뛰지 않으면
  원하는 값이 나오지 않는 경우가 생기기때문입니다.
  
*/