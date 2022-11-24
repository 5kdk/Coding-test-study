/*

https://leetcode.com/problems/move-zeroes/description/
문제 easy 283 Move Zeroes


정수 배열 nums가 주어지면 0이 아닌 요소의 상대적인 순서를 유지하면서 모든 0을 끝으로 이동합니다.
배열의 복사본을 만들지 않고 이 작업을 제자리에서 수행해야 합니다.


exam1:
  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]

exam2:
  Input: nums = [0]
  Output: [0]

제약:
  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1


// Topics
// array / Two Pointers
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      if (idx !== i) nums[i] = 0;
      idx++;
    }
  }
};
