// 문제설명
// 두 개의 문자열 s와 t가 주어지면 t가 s의 애너그램이면
//  true를 반환하고 그렇지 않으면 false를 반환합니다. 
//  애너그램은 일반적으로 모든 원래 문자를 정확히 한 번만 사용하여 
//  다른 단어나 구의 문자를 재배열하여 형성된 단어 또는 구입니다.


// 예제
// Input: s = "anagram", t = "nagaram"
// Output: true

// 문제 풀이방식
var isAnagram = function(s, t) { // s : 원본문자열 t: 바뀐문자열
    return cleanString(s) === cleanString(t); // 원본문자열과 바뀐 문자열을 함수의 매개변수로 집어넣어서 같으면 true. 아니면 false
 };
 
 function cleanString(str) {
   return str = str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join(''); 
     // 고려해야할 점 1. 특수문자제거, 소문자로, split로 문자 하나하나 나눈 후  sort로 오름차순 정렬 후 join으로 문자열 합침
 }