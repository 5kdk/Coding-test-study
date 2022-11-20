/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 문제 고려할 점  : 이중반복문 안됨 (O(n)의 시간복잡도를 가져야 한다)
//                  나누기를 하면 안된다.
//                  예시를 보았을 때 nums 배열에서 0의 갯수에 따라 구현해야 함을 알 수 있다.
// 고려해야 할 케이스
// 0의 갯수가 2개 이상일 때 : 모든 배열의 요소가 0으로 이루어질 수 밖에 없음
// 0의 갯수가 1개일 때 : 0을 제외한 다른 모든 요소는 0이되고, 0의 위치에는 0을 제외한 모든 수의 곱이 도출된다. (예시 2번)
// 0의 갯수가 0개일 때 : 모든 수의 곱 / 자기자신 (예시 1)

var productExceptSelf = function (nums) {
  let answer = []; // 새로운 배열을 담을 변수

  let zeros = 0; // 0의 개수를 나타내는 변수
  let totalMultiple = 1; // 모든 수의 곱을 나타내는 변수
  nums.forEach((num) => {
    if (num) {
      totalMultiple *= num; // num의 값을 곱한다.
    } else {
      zeros++; // 아니면 0의 개수 1씩 증가
    }
  });

  // 1. 0의 갯수가 2개 이상일 때
  if (zeros > 1) {
    answer = Array.from({ length: nums.length }, () => 0); // nums의 배열 길이만큼 앝은 복사하고 0을 할당 [0. 0. 0. 0]
    // 2. 0의 갯수가 1개일 때
  } else if (zeros === 1) {
    answer = nums.map((num) => {
      if (num) return 0;
      else return totalMultiple; // 예시 2로 돌려보면 [0,0,9,0,0]
    });
    // 3. 0이 존재하지 않을 때
  } else {
    answer = nums.map((num) => {
      return totalMultiple / num; // 모든 수의 곱에 자기자신을 나눈 값
    });
  }

  return answer;
};
