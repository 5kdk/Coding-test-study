
/* 문제정보
문자열이 매개변수로 주어집니다.
주어진 문자열을 토대로 문자열을 해석하여 문자열 형태로 리턴합니다.


example
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".


해당 문제 링크
https://leetcode.com/problems/goal-parser-interpretation/

*/

var interpret = function(command) {
    let answer = ''
    for(i=0;i<command.length ; i++) {
        if(command[i] == "(" && command[i+1] == ")") {
            answer += "o"
        }
        else if(command[i] == "(" && command[i+1] == "a") {
            answer += "al"
        }
        else if(command[i] == "G") {
            answer += "G"
        }
    }
    return answer
};

/* 풀이 방법 및 조건과 다른 풀이

조건
1. 문자열은 총 세가지 패턴으로만 주어집니다. G , () , (al)
2. 문자열은 인덱스와 length개념이 있습니다.

풀이 방법
1. for문을 통해 command의 idx 전체에 접근합니다.
2. 문자열은 총 세가지 패턴이므로 if문과 논리곱연산자를 이용해 처리할 수 있습니다.
3. 각 인덱스의 값과 각 인덱스의 다음 값을 비교해서 정답을 구할 수 있습니다.


다른 풀이방법

var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");
};
split()과 join()의 separator를 이용해서 문제를 간략히 풀 수 있습니다.

*/

