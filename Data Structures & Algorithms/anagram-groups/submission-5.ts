class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map();

        for(const word of strs){
            const key = word.split("").sort().join();
            if(!group.has(key)){
                group.set(key,[])
            }
            group.get(key).push(word)
        }
        return [...group.values()]
    }
}
