/**
 * @param {string} s
 * @return {number}
 */

let lengthOfLongestSubstring = function(s) {
    let max = 0
    let start = 0
    let map = {}
    
        for(let end = 0; end < s.length; end++ ) {
            if(map[s[end]] !== undefined && map[s[end]] >= start) {
                start = map[s[end]] + 1
            }
            map[s[end]] = end
            max = Math.max(max, end - start +1)
        }
     return max
    }