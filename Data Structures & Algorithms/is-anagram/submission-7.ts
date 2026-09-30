class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        const chCount = new Map<string,number>();
        
        for (const ch of s){
            chCount.set(ch,(chCount.get(ch)??0)+1)
        }

        for(const ch of t){
            const count = chCount.get(ch)??0
            if(count === 0) return false;
            chCount.set(ch, count-1)
        }
        return true
    }
}
