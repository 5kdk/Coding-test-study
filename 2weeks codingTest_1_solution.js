// [문제 설명]
// n개의 문자를 보여주는 크기가 n인 전광판이 있습니다. 전광판의 문자는 오른쪽에서 왼쪽으로 반복해서 흘러가며, 1초에 한 글자씩 흘러갑니다.
// 예를 들어, 크기가 5인 전광판에 "Snowball" 노출한다고 가정할 때, 시간 t의 변화에 따른 노출 예시는 다음과 같습니다.
// 전광판의 크기 n과 전광판에 노출할 문자 s 그리고 시간 t가 주어질 때, t 초 후의 전광판에 표시될 문구를 출력하는 함수, solution을 완성해주세요.

// 예시
// t : 0초
// 전광판 : .....

// t : 1초
// 전광판 : ....S

// t : 5초
// 전광판 : Snowb

// t : 10초
// 전광판 : all..

// t : 15초
// 전광판 : ...Sn

// 풀이방법
function solution(n,s,t){ // 전광판의 크기 5  전광판에 노출할 문자 "Snowball" 시간 18
    const text = '.'.repeat(n) + s + '.'.repeat(n); // 입력되는 text (이전에는 n - 1로 뒤에는 해줬었는데 n으로 해줘도 잘 나옵니다.)
    // .....Snowball..... (점이 5개와 showball 글자는 무조건 반복되기 때문에 넣어주고 뒤의 남는 시간도 고려해야되서 같은 수대로 점을 넣어줍니다.)
    // 반복주기 
    const duration = n + s.length; // 반복되는 주기 .....Snowball
    
    // 반복되는 주기를 '제외하고 남은 시간'
    const time = t % duration; // 시간 나누기 반복주기의 나머지 18 % 13 === 5 // 뒤의 점 .....

    result = text.substr(time ,n); //substr() : text.substr(시작위치:5 길이: 5)
    return result;  // Snowb
}


// testcase
solution(5,"Snowball",18);