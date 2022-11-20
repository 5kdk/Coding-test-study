// 문제
// 정수 배열 숫자가 주어지면 가장 큰 곱을 갖는 하위 배열을 찾고 그 곱을 반환합니다. 답변이 32비트 정수에 맞도록 테스트 케이스가 생성됩니다.

// 예시
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.


//풀이방법
var maxProduct = function(nums) { 
    let result = nums[0]; // 결과값을 담을 변수  // 2
    let max = nums[0]; // 최대값   
    let min = nums[0]; // 최소값
    
    for(let i = 1; i < nums.length; i++){ // 3. -2. 4
      let prevMax = max; // 이전 최대값 // 2
      let prevMin = min; // 이전 최소값 // 2
      // 이전 최대값+현재값 , 현재값, 이전 최소값*현재값
      // 이전에 있던 최소값이 이후에 나올 음수 값과 곱해지면서 최대값이 나올 수 있도록 고려하였음.
      max = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]); // 최대값 // 6, -2, 4
      min = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]); // 최소값 // 3, -12, -48
  
      // 만약에 결과값이 max보다 작다면 결과값에 max를 할당
      if(result < max) result = max
    }
      return result; // 6
  };