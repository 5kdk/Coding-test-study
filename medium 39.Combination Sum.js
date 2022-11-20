
/* 문제정보
정수를 담은 배열 candidates와 정수 target이 매개변수로 주어집니다.
candidates의 배열요소들을 조합하여 target값을 만들 수 있는 경우의 수를 2차원 배열 형태로 return 합니다. 
이때 같은 요소를 재활용할 수 있습니다.


example
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

해당 문제 링크
https://leetcode.com/problems/combination-sum/

*/

var combinationSum = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};


/* 문제 조건과 풀이 방법

조건
1. return 값은 2차원 배열의 형태여야합니다.
2. index를 재활용할 수 있습니다.

풀이 방법
1. 재귀를 통한 역추적 솔루션을 구현합니다.
2. 발생할 수 있는 경우의 수를 고려해 재귀의 종료조건을 이원화합니다.
3. 꼬리재귀 형태로 구현하여 스택을 최소화합니다.

*/