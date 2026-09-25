class ListNode<T>{
    val:T;
    next:ListNode<T>|null = null;
    constructor(val:T){
        this.val = val;
    }
}
class LinkedList {

    private readonly dummy = new ListNode(0);
     private tail = this.dummy;
     private length = 0;

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        
        if(index < 0 || index >= this.length){
            return -1;
        }
        let current = this.dummy.next;
        for(let i = 0; i < index; i++){
            current = current!.next;
        }
        return current!.val;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.dummy.next;
        this.dummy.next = node;
        if(this.dummy === this.tail) this.tail = node;
        this.length++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new ListNode(val);
        this.tail.next = node;
        this.tail = node;
        this.length++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if(index < 0 || index >= this.length){
            return false
        }
        let prev = this.dummy;
        let current = this.dummy.next!;
        for(let i = 0; i < index; i++){
            prev = current;
            current = current!.next!;
        }
        prev.next = current.next;
        if(current === this.tail) this.tail = prev;
        this.length--;
        return true
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result = [];
        let current = this.dummy.next;

        while(current){
            result.push(current.val);
            current = current.next;
        }
        return result

    }
}


const list = new LinkedList()

list.insertHead(10)
list.insertHead(20)
list.insertTail(15)
list.insertTail(12)
list.insertHead(5)



console.log('list values', list.getValues());
console.log('get value 2', list.get(2));
