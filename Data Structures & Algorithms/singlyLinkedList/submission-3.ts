class ListNode {
    val: number;
    next: ListNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}

class LinkedList {
    private readonly dummy = new ListNode(-1);
    private tail: ListNode  = this.dummy;
    private length: number = 0;
    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.length) {
            return -1;
        }

        let current = this.dummy?.next;

        for (let i = 0;i < index;i++) {
            current = current!.next!;
        }

        return current!.val;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.dummy?.next;
        this.dummy!.next = node;

        if (this.tail === this.dummy) this.tail = node;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new ListNode(val);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let prev = this.dummy;
        for (let i = 0;i < index;i++) {
            prev = prev.next!;
        }
        const target = prev.next!;
        prev.next = target.next;
        if (target === this.tail) {
            this.tail = prev;
        }
        this.length--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result: number[] = [];
        let current = this.dummy?.next;

        while (current) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }
}


const list = new LinkedList();

list.insertHead(10);
list.insertTail(5);
list.insertHead(20);
list.insertTail(50);

console.log("values", list.getValues());

console.log('get 0 ', list.get(0));

list.remove(1);
list.remove(2);

console.log("values", list.getValues());
