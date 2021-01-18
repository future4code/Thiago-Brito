const findLoneNumber = (arr:number[]) =>{
  const res = arr.filter(x=> arr.indexOf(x) === arr.lastIndexOf(x))
    return res
}

console.log(findLoneNumber([1,2,2,3,3,1,4])) 