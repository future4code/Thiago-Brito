let parentArr = [[1,-1],[-1,-2], [-2,-3]]
let result = []
const findNegative = (parentArr:number[][], result:any, childArr:[], item:number)=>{
    for(let childArr of parentArr){
        for(let item of childArr){
            if(item < 0){
                return result++
            }
            result.sort(function(a,b){
                return a-b
            })
        }
    }
    console.log(result)
}

