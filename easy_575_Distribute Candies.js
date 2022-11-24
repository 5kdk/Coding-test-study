/* 문제정보

정수를 담은 배열 candyType이 매개변수로 주어집니다.
candyType의 배열길이는 항상 짝수입니다.
배열의 길이는 Alice가 가진 사탕의 총갯수를 뜻합니다.
의사는 Alice에게 그녀가 갖고있는 사탕의 n / 2개만 먹으라고 조언했지만
앨리스는 최대한 다양한 종류의 사탕을 먹고싶어합니다.

그녀가 먹을 수 있는 사탕 종류의 최대개수를 정수형태로 반환합니다.

example
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.


문제링크
https://leetcode.com/problems/distribute-candies/
*/

var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    if(candyType.length / 2 >= set.size) {
        return set.size
    }
    else { return candyType.length / 2}
};

/* 풀이방법
set객체를 이용해서 중복값을 모두 제거할 수 있다는 생각으로 구현한 풀이입니다.
만약 candyType / 2의 길이가 setsize보다 같거나크다면 모든 유형의 사탕을 먹을 수 있다는 뜻이니
set.size를 반환해주고

만약 setsize가 candyType/2보다 크다면 alice가 먹을 수 있는 사탕의 총합인 candyType.length / 2 를 반환하는 코드입니다.


*/