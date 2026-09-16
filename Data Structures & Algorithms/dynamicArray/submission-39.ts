class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    data:number[];
    capacity:number;
    size:number;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.data = new Array(capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.data[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.capacity === this.size){
            this.resize();
        }
        this.data[this.size] = n;
        this.size++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size -=1
        return this.data[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        let newCapacity = this.capacity === 0 ? 1: this.capacity*2;
        this.capacity = newCapacity;
        let newArr = new Array(newCapacity);

        for (let i=0; i < this.size;i++){
            newArr[i]=this.data[i]
        }
        this.data = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
