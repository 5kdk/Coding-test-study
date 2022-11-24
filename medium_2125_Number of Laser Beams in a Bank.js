/* 문제정보
은행안의 레이저 빔의 개수를 찾는 문제입니다.
문자열 요소로 이루어진 배열 bank가 주어집니다.

example
bank = ["011001" , "000000" , "010100"]
output : 8


해당 문제 링크
https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

*/


 var numberOfBeams = function(bank) {
    let sequrity = 0;
    let beforerow = 0;
    let answer = 0;
    
    for(i=0;i<bank.length;i++) {
        for (j=0;j<bank[i].length;j++) {
            if(bank[i][j] === '1') {
                sequrity ++;
            }
        }
        
        if(sequrity > 0 ) {
            if(beforerow == 0) {
                beforerow = sequrity
            }
            else {
                answer +=beforerow * sequrity
                beforerow = sequrity
            }
        }
        sequrity = 0
    }
    return answer
};