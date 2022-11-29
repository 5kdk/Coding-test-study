/* 문제정보
숫자로 이루어진 배열 nums가 주어집니다.
배열 nums[i] 각각에 대하여 nums[i]보다 값이 작은 배열 요소의 개수를 찾습니다.

example 
nums = [8,1,2,2,3] / output : [4,0,1,1,3]
nums[0]=8의 경우 이보다 작은 네 개의 숫자가 있습니다(1, 2, 2 3). 
nums[1]=1의 경우 그보다 작은 숫자는 존재하지 않습니다. 
nums[2]=2의 경우 그보다 작은 숫자가 하나 있습니다(1). 
nums[3]=2의 경우 그보다 작은 숫자가 하나 있습니다(1). 
nums[4]=3의 경우 그것보다 작은 세 개의 숫자(1, 2, 2)가 있습니다.


해당 문제 링크
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

*/

var smallerNumbersThanCurrent = function(nums) {
    let answertemp = []
    for(i=0;i<nums.length;i++) {
        let counting = 0        
        for(j=0; j<nums.length; j++) {
            if(nums[i] > nums[j]) {
               counting += 1 
            }
        }
        answertemp.push(counting)
    }
    return answertemp
};