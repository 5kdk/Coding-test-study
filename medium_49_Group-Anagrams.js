/* 
https://leetcode.com/problems/group-anagrams/
문제 Medium 49. Group Anagrams

주어진 배열 strs 에서 Anagram 끼리 그룹화 합니다. 답은 어떤 순서로든 반환할 수 있습니다 .
Anagram 은 모든 철자를 단 한번만 사용하여 재배열을 통해 다른 단어, 혹은 다른 문장으로 바꾸는 것을 뜻합니다.

Example 1.
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


접근방법
1. 같은 철자로 구성되어 있는 문자열인지 확인하기 위해 split, sort, join 과정을 거쳐 정렬해준다.

2. anagram은 같은 값을 출력해낸다.

3. 객체 내에 (obj) 같은 문자열[s]이 있다면 배열에 추가해주고, 같지 않다면 문자열[s] 값을 그대로 유지한다.

4. Object.values를 이용하여 객체의 값들을 배열로 출력해준다.
*/


/**
 * @param {number} n
 * @return {boolean}
 */

/*
testcase:
["eat","tea","tan","ate","nat","bat"]
*/


var groupAnagrams = function(strs) {

    let obj = {};
    
    for (let s of strs) {
    
        let letters = s.split("")		// split을 통해 s 문자열을 쪼개준다
        let sorted = letters.sort()		// sort를 통해 쪼개진 문자열을 알파벳 순으로 정렬해준다
        let joined = sorted.join("")		// 정렬된 값을 다시 문자열로 합쳐준다
        
        console.log('s:', s)	
        console.log('joined:', joined) 
        
        //정렬을 거친 join까지 마치면 아래와 같이 같은 철자로 이루어진 anagram은 같은 값을 출력해낸다.
        /*
        s: eat
        joined: aet
        s: tea
        joined: aet
        s: tan
        joined: ant
        s: ate
        joined: aet
        s: nat
        joined: ant
        s: bat
        joined: abt
        */
        
       obj[joined] ? obj[joined].push(s) : obj[joined] = [s];
       
       console.log(obj[joined])
        /*
        [ 'eat' ]
        [ 'eat', 'tea' ]
        [ 'tan' ]
        [ 'eat', 'tea', 'ate' ]
        [ 'tan', 'nat' ]
        [ 'bat' ]
        */

	}
    
    return Object.values(obj);
};

// 정리된 코드

var groupAnagrams = function(strs) {

    let obj = {};
    
    for (let s of strs) {
        let letters = s.split("").sort().join("");		
       	obj[letters] ? obj[letters].push(s) : obj[letters] = [s];
	}  
    
    return Object.values(obj);
};