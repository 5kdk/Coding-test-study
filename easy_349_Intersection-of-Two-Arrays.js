/*
https://leetcode.com/problems/intersection-of-two-arrays/
문제 Easy 349. Intersection of Two Arrays

두 개의 정수 배열 nums1, nums2 가 주어지면 교차점의 배열을 반환합니다 . 결과의 각 요소는 고유 해야 하며 순서에 상관없이 결과를 반환할 수 있습니다.

Example 1.
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2.
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

1. new Set() 으로 배열을 선언해준다. ➡️  고유한 값을 반환시키기 위함
2. 고유한 값을 담을 빈 배열을 선언해준다.
3. for ...of문으로 nums1 배열을 반복 탐색해준다.
4. 동시에 nums2 배열에도 같은 값이 있다면 빈 배열에 push로 담아준다.
*/

/**
 * @param {number} n
 * @return {boolean}
 */

/*
testcase:
[1,2,2,1]
[2,2]
*/

var intersection = function(nums1, nums2) {
    const nums1set = new Set(nums1)
    const nums2set = new Set(nums2)	
    
    const intersectedArr = []	// 고유한 값을 넣어줄 빈 배열을 선언!
    
    for(let num of nums1set) {	// for ...of로 반복문 구현
    
       nums2set.has(num) ? intersectedArr.push(num) : null	
       // nums2 배열에 nums1에도 있는 값이 있다면, 빈 배열에 추가해준다. (삼항연산식으로 if문 간결하게)
       
    }
    return intersectedArr
};