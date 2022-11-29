// 문제
// 배열 숫자가 주어집니다. 
// 배열의 누적 합계를 runningSum[i] = sum(nums[0]…nums[i])로 정의합니다. 
// 숫자의 누적 합계를 반환합니다.



// 예시
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].



// 풀이방법
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    const output = [nums[0]]; // 1
     
     for (let i = 1; i < nums.length; i++) { // 2, 3, 4
         output.push(output[output.length - 1] + nums[i]); // [1, 3] => [1. 3. 6] => [1, 3, 6, 10]
     }
     
     return output; // [1, 3, 6, 10]
 };
