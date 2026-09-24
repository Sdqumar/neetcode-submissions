class ListNode {
    val: number;
    next: ListNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}

class LinkedList {
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private length: number = 0;
    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.length) {
            return -1;
        }

        let current = this.head!;

        for (let i = 0;i < index;i++) {
            current = current.next!;
        }

        return current.val;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;

        if (this.tail === null) this.tail = node;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new ListNode(val);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
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
        let i = 0;
        let prev: ListNode | null = null;
        let current = this.head;

        while (current !== null) {
            if (i === index) {
                if (current === this.head) {
                    this.head = current.next;

                } else {
                    prev!.next = current.next;
                }
                if (current === this.tail) {
                    this.tail = prev;
                }
                this.length--;
                return true;

            }
            prev = current;
            current = current.next;
            i++;

        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result: number[] = [];
        let current = this.head;

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
