// 문제설명
// 연결된 목록의 헤드인 head가 주어지면 연결된 목록에 순환이 있는지 확인합니다
// 다음 포인터를 계속 따라가면 다시 도달할 수 있는 노드가 목록에 있으면 연결된 목록에 주기가 있습니다. 
// 내부적으로, pos는 꼬리의 다음 포인터가 연결된 노드의 색인을 나타내는 데 사용됩니다. pos는 매개변수로 전달되지 않습니다.
// O(1)(즉, 상수) 메모리를 사용하여 해결할 수 있습니까?

// 예시
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// 연결된 목록에는 꼬리가 첫 번째 노드(인덱스 0)에 연결되는 주기가 있습니다.

// 문제풀이
/**
 * Definition for singly-linked list. // Singly Linked List는 데이터들이 한쪽 방향으로만 연결 되어있는 것을 말합니다. 데이터가 저장되는 객체를 node라고 하며, 가장 첫번째 node를 head라고 부릅니다.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head) return false // 종료조건
    while(head.val !== "done"){ 
        head.val = "done"
        head = head.next
        if(!head) return false
    }
    return true;
};