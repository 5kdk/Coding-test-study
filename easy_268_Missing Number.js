// 문제
// [0, n] 범위의 n개의 고유한 숫자를 포함하는 배열 nums가 주어지면 배열에서 누락된 범위의 유일한 숫자를 반환합니다.

// 예시
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


// 풀이방법
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) { // nums : [3, 0, 1] length: 3  0~3의 범위에서 없는 숫자  : 2
    let newNums = nums.length+1 // 4
    for(let j=0;j<newNums;j++){ // j : 0, 1, 2, 3 
      if (!nums.includes(j)){ // 만약에 nums가 j를 포함하고 있지 않다면 리턴해준다.
      return j
      }
    }
  };
  