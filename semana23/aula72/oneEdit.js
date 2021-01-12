var checkOneEdit = function (firstString, secondString) {
    // checa se é do mesmo tamanho
    if (firstString === secondString) {
        return false;
    }
    var firstLength = firstString.length;
    var secondLength = secondString.length;
    // checa se a diferença é maior que 1
    if (firstLength - secondLength > 1 || secondLength - firstLength > 1) {
        return false;
    }
    return true;
};
console.log(checkOneEdit('aaba', 'aaba'));
