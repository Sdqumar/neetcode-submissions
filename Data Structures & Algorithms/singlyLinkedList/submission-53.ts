class LinkNode<T> {
    val: T;
    next: LinkNode<T> | null = null;
    constructor(val: T) {
        this.val = val;
    }
}
class LinkedList {
    private readonly dummy = new LinkNode(-1);
    private tail = this.dummy;
    private length = 0;
    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.length) {
            return -1;
        }
        let current = this.dummy.next;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new LinkNode(val);
        node.next = this.dummy.next;
        this.dummy.next = node;
        if (this.dummy === this.tail) {
            this.tail = node;
        }
        this.length += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new LinkNode(val);
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
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

        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        if (prev.next === this.tail) {
            this.tail = prev;
        }
        prev.next = prev.next.next;
        this.length -= 1;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let result = [];
        let current = this.dummy.next;

        for (let i = 0; i < this.length; i++) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
