// 338. Counting Bits

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
// ans[i] is the number of 1's in the binary representation of i.
// 정수 n이 주어지면 각 i(0 <= i <= n)에 대해 ans[i]가 i의 이진 표현에서 1의 개수가 되도록 길이가 n + 1인 배열 ans를 반환합니다.

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) { // 2
    n++;   // 3                               

   let nums = [0]; // 담아줄 배열
   while (nums.length < n) { // 3
       nums = [
           ...nums, // 0,1 
           ...nums.map((num) => num + 1), // 0,1,1 
       ];  
//0,1,1
   }
   nums.length = n;  // 3
   return nums; // 0,1,1 
};
