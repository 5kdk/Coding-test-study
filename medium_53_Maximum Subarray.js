// 53. Maximum Subarray

// Given an integer array nums, find the subarray which has the largest sum and return its sum.
// 정수 배열 nums가 주어지면 합이 가장 큰 부분 배열을 찾아 그 합을 반환합니다.

/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxSubArray = function (nums) {
   // 1. 완전탐색으로 풀이한 방법
   // let maxVal = -Infinity; // 최대값 변수선언
   // for(let i = 0; i < nums.length; i++){ // -2, 1, -3, 4, -1, 2, 1, -5, 4
   //   for(let j = i; j < nums.length; j++){
   //     sum = 0 // 더한값 담는 변수 할당
   //     for (let k=i; k<=j; k++) // 시작하는것부터 끝까지 모든 수만큼 반복
   //       sum += nums[k]; // 모든 수를 누적시키면서 더해서 sum변수에 할당
   //     if(sum > maxVal) // 만약에 sum이 maxVal보다 크면 maxVal에 sum할당
   //       maxVal = sum;
   //   }
   // }
   // return maxVal // 6
   // 이렇게 풀이했더니 시간초과가 걸렸다.

   // 2. DP로 풀이한 방식
   // const dp = [];
   //   dp.push(nums[0]);
   //   for (let i=1; i<nums.length; i++)
   //     dp.push(nums[i] + dp[i-1]);
   //   let maxVal = -Infinity; // 최대값 변수선언
   //   for(let i = 0; i < nums.length; i++){ // -2, 1, -3, 4, -1, 2, 1, -5, 4
   //     for(let j = i; j < nums.length; j++){
   //       const sum = (i==0 ? dp[j] : dp[j] - dp[i-1]);
   //       if(sum > maxVal) // 만약에 sum이 maxVal보다 크면 maxVal에 sum할당
   //         maxVal = sum;
   //     }
   //   }
   //   return maxVal
   // 이렇게 해도 시간초과 ;;
   // 카테킨 알고리즘 이라는 방식이 있다.
   for (let i = 1; i < nums.length; i++) {
     //nums[i] :  -2,       //  1, -3, 4, -1, 2, 1, -5, 4
     //nums[i] + nums[i - 1] : -1, -2, 2, 3, 5, 6, 1, 5
     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]); // 나자신, 나자신을 포함한 값을 비교해서 큰 값을 할당
   }
   // nums[i] = 1, -2, 4, 3, 5, 6, 1, 5
   return Math.max(...nums); // 6
 };