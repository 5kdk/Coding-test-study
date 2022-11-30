/*
[문제 설명]
숫자 배열 arr가 주어집니다. 이 중 0에서 가장 가까운 값을 구하는 함수, solution을 완성해주세요.

[입력 형식]
- arr는 길이가 1 이상 100 이하인 배열입니다.
- arr의 원소는 0 이상 100 이하의 정수입니다.

[출력 형식]
- 0에서 가장 가까운 값을 구합니다.
*/

function solution(arr) {
    return Math.min(...arr)
}


/*
접근방법

1. 0과 가장 가까운 값을 구하는데 arr의 원소는 무조건 양수였습니다.
즉 Math.min()을 이용해서 최솟값을 구해주기만 하면 답을 얻을 수 있었습니다.

*/