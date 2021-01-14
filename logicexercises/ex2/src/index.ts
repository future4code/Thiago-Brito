const findPrefix = (str:string[]) =>{
    let prefix = str[0]
    let prefixLen = prefix.length;
    for (let i=1; i<str.length && prefixLen>0; i++){
        let word = str[i]
        let matchLen = 0
        let maxMatchLen= Math.min(word.length, prefixLen);
        while (++matchLen <maxMatchLen){
            if(word.charAt(matchLen) != prefix.charAt(matchLen)){
                break;
            }
        }
        prefixLen = matchLen;
    }
    return prefix.substring(0, prefixLen);
}
console.log(findPrefix(["bola", "boliche", "bolacha"]))