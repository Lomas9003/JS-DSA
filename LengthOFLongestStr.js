function lengthOfLongestSubstring(s) {
    // Your implementation
    let result = new Set()
    let left = 0;
    let maxLength = 0

    for (let i = 0; i < s.length; i++){
        while (result.has(s[i])) {
            result.delete(s[i])
            left++
        }
        result.add(s[i])
        maxLength = Math.max(maxLength , (i - left) + 1)
    }
    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3 