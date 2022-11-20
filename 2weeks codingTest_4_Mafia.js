// [문제 설명]

// 제로베이스 멤버들은 모두 모여서 마피아게임을 하기로 했습니다.

// 마피아게임의 규칙은 다음과 같습니다. N명의 멤버들은 같은 숫자의 카드를 받고, 단 2명만 다른 숫자의 카드를 받습니다.

// 멤버들은 최소 5명이 있으며, 매 게임마다 무조건 2명의 마피아가 존재합니다.

// 이 때 마피아인 멤버의 인덱스를 찾아서 오름차순으로 출력해주세요.

// 예를 들면 주어진 배열 members가 [4, 4, 10, 4, 10] 이라고 할 때,

// 5명의 멤버들 가운데 10의 카드를 가진 멤버가 마피아이고 저희가 출력해야 할 결과는 [2, 4]입니다.

// [제한 사항]

// - 배열 members에는 최소 5개 이상의 원소가 포함되어 있습니다.

// - 배열 members의 모든 원소는 양수입니다.

// - 마피아는 항상 2명입니다.

// [입력 형식]

// - 배열 members가 주어집니다.

// [출력 형식]

// - 마피아 2명의 인덱스가 담긴 배열을 오름차순으로 반환합니다.

// 틀린 답 
// function solution(members) {
//     var answer = [];
//     let max = -Infinity;
//     // 최대값 구하기
//     for(let i = 0; i < members.length; i++){ // 4, 4, 10, 4, 10
//         if(max < members[i]){
//             max = members[i] // 10
//         }
//         // 이렇게 하니까 만약에 마피아 수가 작으면 값이 제대로 나오지 않게 됩니다. 

//     }
//     let count = 0; // 인덱스 수 세는 변수
//     for(let i = 0; i < members.length; i++){ // 4, 4, 10, 4, 10
//         if(max == members[i]){ // 만약에 최대값과 members[i]의 값이 같다면
//             answer[count++] = i // 인덱스 추가
//         }
//     }
//     return answer; // [2, 4]

// }

// 결국 정답 코드를 보며 이해하였습니다.
function solution(members) {

    answer = [] // 결과 출력할 변수
    
    // 1. 중복값이 무엇인지 set으로 걸러내기
    member_set = new Set(); // set을 만들어서 중복 배열을 제거하여 반환합니다.
    members.forEach((e, i) => {
        member_set.add(e) // member_set : Set(2) { 4, 10 } set 배열에 members 배열 값들을 집어 넣어서 중복을 제거해 반환함.
    })

    let mafia = -1; // 마피아를 가르키는 변수


    // 2. 중복값과 members 배열의 값과 비교하여 개수 세기 
    member_set.forEach((e, i) => { // e : 4, 10
        let cnt = members.filter(ele => e === ele).length;
        // members에 filter를 활용하여 member의 값과 member_set의 값과 비교해서 같은 값의 길이(개수)를 반환한다.
        // [4, 4, 4] =  3 ,[10, 10] =  2
        if (cnt == 2) { // 만약에 cnt가 2이면
            mafia = e    // 마피아 변수에 할당 mafia = 10
        }
    })
    
    // 3. 마피아인 값의 인덱스 담아서 리턴하기
    members.forEach((e, i) => {
        if (e === mafia) { // 만약에 e (10)가 마피아 이면
            answer.push(i)  // 마피아에 해당하는 값의 인덱스를 집어넣는다.
        }
    })

    return answer // [2, 4]
}

 
//testCase
let input = [[4, 4, 10, 4, 10]];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}