const checkOneEdit = (firstString:string, secondString:string):boolean =>{
    // checa se é do mesmo tamanho
    if(firstString === secondString){
        return false;
    }
    
    let firstLength = firstString.length
    let secondLength = secondString.length
// checa se a diferença é maior que 1
    if(firstLength - secondLength >1 || secondLength - firstLength >1){
        return false;
    }

    if (firstString.length > secondString.length) return firstString.includes(secondString)
    if (secondString.length > firstString.length) return secondString.includes(firstString)
    
    let charsDiffCount = 0
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] !== secondString[i]) charsDiffCount++
    }
      

    return true

}

// console.log(checkOneEdit('aaba', 'aab'))
// console.log(checkOneEdit('aba', 'aab'))

