// 주어진 두개의 수의 소인수 분해 했을때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.

// 예를들어 12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
// 9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.

// [입력]
// 1 ~ 10000 사이의 정수 A, B

// [출력]
// 공통된 소수 집합인 경우 1, 아니면 0


// 소인수분해 ==> 둘의 수가 같으면 1 아니면 0

const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

function solution(A, B) { // 12, 6

  function Factorization(n) { // 12일때 12 => 6  => 3 | 6일때 6 => 3
    let idx = 2; // 나누는 수 // 3 // 2
    const smallNumber = []; // 12일때 2 , 2 , 3 | 6일때 2 , 3
    // n이 0이 될때까지
    while (n !== 1) {
    // n의 약수라면 배열에 추가
      if (n % idx === 0) {
        smallNumber.push(idx); 
        n /= idx; 
        idx = 2; 
      } else { // 안 나눠진다면 나누는 수를 1 증가
        idx += 1; //3
      }
    }
    // 중복 제거하여 반환 [ 2, 2, 3, 2, 3] => Set(2) { 2, 3 }
    return new Set(smallNumber); 
  }
  return eqSet(Factorization(A), Factorization(B)) ? 1 : 0; 
}



console.log(solution(12, 6)); // 1
