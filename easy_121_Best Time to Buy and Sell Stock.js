/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let min = prices[0]; // 7
  let max_diff = 0; // 최대이익

  for (let i = 1; i < prices.length; i++) {
    // 1, 5, 3, 6, 4 ...
    if (prices[i] < min) {
      // 매수(제일 작은 값)
      min = prices[i];
    } else {
      let diff = prices[i] - min; // 매도 - 매수 = 이익

      if (diff > max_diff) {
        max_diff = diff; // 최대이익을 할당
      }
    }
  }
  return max_diff;
};
