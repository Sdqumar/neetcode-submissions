class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
 isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        // const count = new Map<string, number>();

        // for (const ch of s) {
        //     count.set(ch, (count.get(ch) ?? 0) + 1);
        // }

        // for (const ch of t) {
        //     const c = count.get(ch) ?? 0;
        //     if (c === 0) return false;
        //     count.set(ch, c - 1);
        // }


        const count = new Array<number>(26).fill(0);

        for(let i = 0; i < s.length;i++){
            count[s.charCodeAt(i) -97]++;
            count[t.charCodeAt(i) - 97]--;
        }
        return count.every(c=>c===0);


    }
}
