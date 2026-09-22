
class ListNode {
    
    val: number;
    next:any;
    
    
    constructor(val:number,nextNode = null){
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {

    head:ListNode;
    tail:ListNode;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head.next;
        let i = 0;

        while (curr){
               if (i === index){
                return curr.val;
               } 
               i++;
               curr = curr.next;
        }
        return -1;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        let new_node = new ListNode(val);
        new_node.next = this.head.next;
        this.head.next = new_node;
        if(!new_node.next){
            this.tail = new_node;
        }

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let i = 0;
        let curr = this.head;

        while (i < index && curr){
            i +=1 
            curr = curr.next;
        }
        if (curr && curr.next){
            if(curr.next === this.tail){
                this.tail = curr;
            }
            curr.next = curr.next.next
            return true
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let curr = this.head.next;
        let res = []

        while (curr){
            res.push(curr.val)
            curr = curr.next;
        }
        return res
    }
}
