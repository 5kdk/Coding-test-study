
/* 문제정보

내림차순으로 정렬된 정수 요소로 이루어진 배열과 정수 target이 매개변수로 주어집니다.
배열에서 target값을 가진 index를 찾을 수 없으면 [-1, -1]을 반환합니다.
시간복잡도 O(log n)으로 알고리즘을 작성합니다.

example
입력: 숫자 = [5,7,7,8,8,10], 대상 = 8
출력: [3,4]

입력: 숫자 = [5,7,7,8,8,10], 대상 = 6
 출력: [-1,-1]


해당 문제 링크
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

var searchRange = function(nums, target) {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};


/* 풀이 방법
정답이 되는 요소는 nums에서 2개를 초과하지 않는다는 점에서 착안하여
문자열의 앞에서부터 해당요소를 찾는 indexOf()와
문자열의 뒤에서부터 요소를 찾는 lastIndexOf()를 조합하여 문제를 풀었습니다.

indexOf()와 lastIndexOf()는 해당요소를 찾을 수 없을 땐 -1을 반환하므로
예외 케이스를 따로 설정해줄 필요가 없었습니다.

*/





/* 다른사람의 풀이
이진탐색 알고리즘을 활용한 풀이입니다.
코드의 길이는 제 풀이보다 길어지지만
이진탐색 알고리즘을 실제로 구현하는 방법을 알 수 있습니다.

var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1, mid;
    
    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }
    
    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];
    
    const start = low;
    
    // reset low and high
    low = 0, high = nums.length-1;
    
    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};


이진탐색은 updown 게임과 유사합니다.
Math.floor()는 소수점을 버려주는 메서드입니다.

(low + high) / 2 를 하면 배열의 중앙값에 위치하게될것입니다.
만약 배열의 중앙 인덱스의 값이 타겟과 비교해서 크거나 같다면
high = mid-1을 할당해줍니다.
그렇지 않다면 target값은 중앙값보다 작다는 뜻이기때문에
low = mid +1을 할당해줍니다.

while문은 low와 high가 같거나 low가 high보다 더 커지기 전까지 동작하므로
위 탐색을 계속하면 target값을 찾을 수 있을 것입니다.

*/