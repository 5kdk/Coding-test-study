// 문제
// 정수 columnNumber가 주어지면 Excel 시트에 표시되는 해당 열 제목을 반환합니다.


// 예시
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
// ex1)
// Input: columnNumber = 1     
// Output: "A"

// 풀이방법

/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) { // 28
    
    let str = '';
    
    while(columnNumber > 0) { // 0보다 클때까지 반복
        
        columnNumber--; // 1씩 줄여나감 27

        str += String.fromCharCode((columnNumber % 26) + 65); //문자열을 아스키 코드(65 A ~ 90Z까지 대문자)로 변환함. 66 B 65 A
        columnNumber = Math.floor(columnNumber / 26); // Math.floor : 소수점 이하 버림
    }
    
    // 문자열을 뒤집어준다.
    str = str.split('').reverse().join(''); // [B, A] -> [A, B]
    return str;
};