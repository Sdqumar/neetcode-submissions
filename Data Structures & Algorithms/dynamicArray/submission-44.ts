class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    arr:number[];
    capacity:number;
    size:number;
    constructor(capacity: number) {
        this.size = 0;
        this.capacity = capacity;
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.size === this.capacity){
            this.resize();
        }
        this.arr[this.size]= n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size -= 1;
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *=2;
        let newArr = new Array(this.capacity);

        for(let i=0; i < this.size; i++){
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
