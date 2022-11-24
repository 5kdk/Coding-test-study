// 문제
// 정수 배열 nums가 주어지면 i != j, i != k, j != k 및 nums[i] + 숫자[j] + 숫자[k] == 0.
//  솔루션 세트에는 중복된 삼중 항이 포함되어서는 안 됩니다.

// 예제
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// 뚜렷한 삼중 항은 [-1,0,1]과 [-1,-1,2]입니다. 출력의 순서와 셋의 순서는 중요하지 않습니다.


// 풀이방법
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var threeSum = function(nums) { // nums : [-1,0,1,2,-1,-4]
    nums.sort((a, b) => a - b) // 숫자 배열을 오름차순으로 정렬함
    const firstPositive = nums.findIndex((num) => num > 0) // 첫번째 양수인 인덱스 찾기
    //양수가 없으면 nums 배열에 0이 세 개 이상 있으면 [[0, 0, 0]]을 반환합니다. 아니면 빈배열 리턴
    if (firstPositive === -1) {
      if (nums.filter((num) => num === 0).length >= 3) {
        return [[0, 0, 0]]
      }
      return []
    }
  
    const answer = []
  
    for (let i = 0; i < firstPositive; i++) { // 0보다 작거나 같은 숫자만 반복
      if (i > 0 && nums[i] === nums[i - 1]) continue  // 이전 숫자와 같은 숫자를 건너뜁니다.
  
      const num = nums[i]
  
      let left = i + 1
      let right = nums.length - 1
      
      while (left < right) {  // 나머지 요소의 양쪽에서 0이 되는 쌍을 찾습니다.
        const sum = num + nums[left] + nums[right]
        if (sum > 0) {
          right--
        } else if (sum < 0) {
          left++
        } else {
          answer.push([num, nums[left], nums[right]])
          left++
          right--
          while (nums[left] === nums[left - 1] && left < right) {
            left++
          }
          while (nums[right] === nums[right + 1] && left < right) {
            right--
          }
        }
      }
    }
    return answer // [[-1,-1,2],[-1,0,1]]  합이 0이 될 수 있는 배열만 리턴
  }