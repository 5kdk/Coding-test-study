/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let result = [];
 var twoSum = function (nums, target) {
   // 1. nums의 길이만큼 반복 i , j
   for (let i = 0; i < nums.length; i++) {
     // 2, 7, 11, 15
     let num = nums[i];
     for (let j = 1; j < nums.length; j++) {
       // 7, 11, 15
       // 2. 만약에 i와j가 같지않고 더했을 때 target과 값이 같다면
       //3. result에 i, j 인덱스 담기
       if (i !== j && num + nums[j] === target) return (result = [i, j]);
     }
   }
 };
 