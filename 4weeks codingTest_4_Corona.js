/*
[문제 설명]
코로나로 인해 건물에 출입하는 인원의 시간을 체크하고 있습니다. 출입 기록인 history에는 출입한 사람의 번호 배열이 저장되어 있습니다.
history에는 건물에 들어올 때에는 양수가, 나갈 때에는 음수가 기록됩니다.
이때, 확진자 번호 infected가 주어질 때, 확진자와 동선이 겹치는 사람의 번호를 오름차순으로 출력하는 함수, solution을 완성해주세요.

예를 들어, history가 [3, 2, -3, 1, -1, -2, 4, -4, 1, -1]이고, infected가 2로 주어질 때, 확진자와 동선이 겹치는 사람은 [1, 3]입니다.

[제한 사항]

사람은 건물을 여러 번 출입할 수 있습니다.
주어지는 history에는 건물에 남아있는 사람이 없습니다.
[입력 형식]

출입 기록인 history가 주어집니다.
history는 1 이상 100 이하의 정수로 이루어진 길이가 1000 이하의 배열입니다.
확진자 번호인 infected가 주어집니다.
infected는 1 이상 100 이하의 정수입니다.
[출력 형식]

확진자와 동선이 겹치는 사람의 번호를 오름차순 배열로 출력합니다.
*/

function solution(history, infected) { 
    let answer = []
    for(i = 0 ; i < history.length ; i++) {
        if(history[i] == infected && history[i-1] > 0 && i != 0) {
            answer.push(history[i-1])            
        }
        if(history[i] == infected && history[i+1] > 0 && i != history.length-1) {
            answer.push(history[i+1])            
        }
        if(history[i] == -infected && history[i-1] < 0 && i != 0) {
            answer.push(Math.abs(history[i-1]))
        }
        if(history[i] == -infected && history[i+1] < 0 && i != history.length-1) {
            answer.push(Math.abs(history[i+1]))
        }        
    }
    let answerset = new Set(answer)
    return [...answerset].sort((a,b) => a - b)
}

/*
접근방법
처음 생각은 indexOf를 이용한 접근이었는데 건물을 여러번 출입할 수 있었기 때문에
for문을 이용해서 답을 구하고자했습니다.

발상은 간단합니다.
1. history[i]가 infected 거나 -infected라면 그 양옆 인덱스의 값을 비교합니다.
2. 만약 동선이 겹친다면 즉 양옆값이 (==infected일땐 양수 ==-infected일땐 음수)일땐 answer 배열에 push해줍니다.

논리곱 연산자를 이용해 1,2를 구현해주되
index값의 +,-를 해주는 작업이기때문에 i = 0 , i = history.length-1일 경우에 대한 예외케이스또한
논리곱 연산자로 반영해주었습니다.

Math.abs()를 통해 음수케이스를 정수로 변환시켜줬습니다.

3. 그렇게 answer 배열에 동선이 겹친 모든 케이스를 모았다면 set으로 중복을 없애줍니다.

4. spread 연산자를 이용해 값을 다시 배열로 만들어주고 오름차순으로 정렬해서 답을 구했습니다.



결과
0.4점 나옴

진짜 이유를 모르겠음 왜 그런걸까요?
건물에 남아있는 사람이 없다는 조건은 왜 있는걸까요..?
*/