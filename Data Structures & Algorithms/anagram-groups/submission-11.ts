class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string,string[]>();

        for(const word of strs){
            const count = new Array<number>(26).fill(0);
            for(let i=0;i < word.length;i++){
                count[word[i].charCodeAt(0)-97]++;
            }
            const key = count.join(",");

            if(!groups.has(key)){
                groups.set(key,[]);
            }
            groups.get(key).push(word);
        }
        return [...groups.values()];
    }
}
