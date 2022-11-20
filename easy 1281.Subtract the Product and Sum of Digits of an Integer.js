/* 문제정보
정수 n이 주어집니다.
n의 각 자릿수의 곱과 각 자릿수의 합 간의 차이를 반환해야합니다.

example -> n = 234 / output : 15
(2 * 3 * 4) = 24 / (2 + 3 + 4) = 9
24 - 9 = 15

해당 문제 링크
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

*/

var subtractProductAndSum = function(n) {
    let plus = n.toString().split("").reduce((pre,cur) => Number(pre) + Number(cur))
    let times = n.toString().split("").reduce((pre,cur) => Number(pre) * Number(cur))
    return times - plus
};