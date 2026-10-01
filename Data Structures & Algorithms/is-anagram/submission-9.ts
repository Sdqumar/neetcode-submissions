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
        const seen = new Map<string,number>();

        for(const ch of s){
            seen.set(ch,(seen.get(ch)??0)+1);
        }
        for(const ch of t){
            const c = seen.get(ch)??0;
            if(c===0){
                return false;
            }
            seen.set(ch,c-1);
        }
        return true;

    }
}
