
/* 문제정보
정수로 이루어진 배열이 주어집니다.
배열의 순열을 모두 담은 2차원 배열을 리턴합니다.

example
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


해당 문제 링크
https://leetcode.com/problems/permutations/

*/

var permute = function(nums, permutation = [], answer = []) {
    
    if(nums.length === 0) {
        answer.push([...permutation]);
    } // 재귀의 종료조건 꼬리재귀 형태로 구현
     
    for(let i = 0; i < nums.length; i++) {
        permutation.push(nums[i]);
        const choices = nums.filter((num, index) => index !== i);
        permute(choices, permutation, answer) // 재귀함수 호출
        permutation.pop();
    }

    return answer //재귀 종료 후 답 return
};


/* 풀이 방법 및 조건과 다른 풀이

조건
1. 모든 순열을 구해야합니다.
2. 배열의 depth는 1~6사이의 범위로 나타나며 랜덤합니다.
3. 결괏값은 이차원 배열 형태로 리턴되어야합니다.

풀이 방법
1. 꼬리재귀를 이용해 스택을 최소화 시킵니다.
2. 2차원 배열 형태로 리턴해주기 위해 [...]연산자를 이용해 배열통째로 push해줍니다.

*/

