/* 
https://leetcode.com/problems/intersection-of-two-arrays-ii/
문제 Easy 350. Intersection of Two Arrays II

두 개의 정수 배열 nums1, nums2 가 주어지면 교차점의 배열을 반환합니다 . 결과의 각 요소는 두 배열에 표시되는 횟수만큼 나타나야 하며 순서에 상관없이 결과를 반환할 수 있습니다 .

Example 1.
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2.
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

접근방법
1. nums1 배열을 Map() 객체 (hashmap)로 만들어준다.
2. nums1의 hashmap인 Map() 객체와 nums2 배열의 값을 비교해준다.
3. nums2가 map과 공통된 값을 가지고 있다면 그 값들을 반환시킬 배열에 push해준다.
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

var intersect = function(nums1, nums2) {
    let map = new Map()	//또는 {}
    let result = []
    
    // nums1의 hashmap을 만들어준다
    for (let n of nums1) {
        if (!map[n]) {	// 객체가 값을 가지고 있지 않는 경우,
            map[n] = 1	// 값을 만들어준다.
        } else { 
            map[n]++	// 값이 있다면 값의 개수를 추가하여 count해준다.
        }
    }
    console.log(map) // output: { '1': 2, '2': 2 } 
    
    for (let n of nums2) {	// nums2 배열의 값 중,
        if (map[n] > 0) {	// map()객체의 값을 가지고 있는지 (>0) 확인해준다.
            result.push(n) 	// 있다면 그 값을 result배열에 넣어준다.
            // map[n]-- 
        }
    }
    console.log(map) // output: { '1': 2, '2': 2 } 
    console.log(map) // output: { '1': 2, '2': 0 } with map[n]--
 
    return result
}