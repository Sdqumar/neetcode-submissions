class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string,string[]>();

        for(const word of strs){
            const key = [...word].sort().join();

            if(!group.has(key)){
                group.set(key,[]);
            }
            group.get(key).push(word)
        }
        return [...group.values()];
    }
}
