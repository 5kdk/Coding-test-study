
// 전광판의 크기 n과 전광판에 노출할 문자 s 그리고 시간 t가 주어질 때, 
// t 초 후의 전광판에 표시될 문구를 출력하는 함수, solution을 완성해주세요.
n = 5 
// ..... s 8 13 t -> 
// time 18   5 8 13   18 % 13 = 5 150 % 13 = 7
// . . . . . s n o w b a l l

function solution(n, s, t) {
    let billboard = new Array(n)
    .fill(".")
    .concat(s.split(''));
    //[.,.,.,.,.,.s,]
    let time = t

    if(billboard.length < t) {
        time = t % billboard.length
    }

    let answer = billboard.slice(time,time+n).join('')
    return answer
}

//문장 s가 주어질 때, 단어를 거꾸로 출력하는 함수, solution을 완성해주세요.
function solution(s) {
    let spliter = s.split(".").join('')
    .split(",").join('')
    .split("!").join('')
    .split("?").join('')
    .split(" ")

    return spliter.map(ele => ele.split('').reverse().join(''))            
}

//배열 A에는 0보다 큰 숫자가 N개 들어있습니다. 모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요.
function solution(A) {

    let answer = []
    for (i=0;i < A.length ; i++) {
        if(A[i] % Math.min(...A) == 0 ) {
            answer.push(A[i] / Math.min(...A))
        }
    }
    return answer.length == A.length ? Math.min(...A):2 ;
}

//마피아인 멤버의 인덱스를 찾아서 오름차순으로 출력해주세요.

function solution(members) {
    let a = new Set(members) // 4 4 10 10 4 set 4 , 10
    for(ele of a) { 
        let find = members.filter(element => element != ele ) 
        if (find.length == 1) {
            return [members.indexOf(ele),members.lastIndexOf(ele)]
        }
    }

}

//주어진 두개의 수의 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지
function solution(A, B) {
    if ( A % B == 0 || B % A == 0) {
        return 1
    } 
    return 0
}
