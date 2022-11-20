// 217. Contains Duplicate

// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
    const setNums = new Set(nums); // set함수는 중복체크를 해준다 {1,2,3}
    return nums.length !== setNums.size ? true : false // 중복 값이 체크되면 배열의 갯수가 다르니까 다르면 true 중복이 없으면 false 리턴
    };