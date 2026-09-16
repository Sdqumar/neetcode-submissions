class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    
    private arr: number[];
    private size:number;

    constructor(capacity:number) {
        this.arr = new Array(capacity);
        this.size= 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i:number) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i:number, n:number) {
        this.arr[i]=n

    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n:number) {
        if (this.arr.length === this.size){
            this.resize()
        }
        this.arr[this.size]=n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size -=1;
        return this.arr[this.size]
    }

    /**
     * @returns {void}
     */
    resize() {

    const newCapacity = this.arr.length === 0 ? 1 : this.arr.length * 2;
      let newArr = new Array(newCapacity);
      
      for (let i = 0; i  < this.size;i++){
          newArr[i]=this.arr[i]
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.arr.length;
    }
}



