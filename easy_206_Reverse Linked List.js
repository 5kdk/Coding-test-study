
// 문제설명
// 단일 연결 목록의 헤드가 주어지면 목록을 뒤집고 반전된 목록을 반환합니다
// 목록의 노드 수는 [0, 5000] 범위입니다.

// 예시
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]



// 문제풀이
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 var reverseList = function(head) {
    let prev = null; // 이전값
    let curr = null; // 현재값 : 아직 아무것도 지정되지 않았으므로 null
    
    while(head){  // head가 null을 가리킬 때까지 반복한다.(하나씩 들어와서 한개씩 화살표 위치를 바꾼다) head : 1
      curr = head.next; //2
      head.next = prev; // 3 -> 1
      prev = head; // 1 <- 2
      head = curr; // head가 2
    }
    return prev;
  };