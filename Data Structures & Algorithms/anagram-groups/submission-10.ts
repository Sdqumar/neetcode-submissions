class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string,string[]>()

        for(const word of strs){
            const count =new Array<number>(26).fill(0);

            for(const ch of word){
                count[ch.charCodeAt(0) - 97]++ 
            }

            const key = count.join(";")
            if(!group.has(key)){
                group.set(key,[])
            }
            group.get(key).push(word);
        }
        return [...group.values()]
    }
}
