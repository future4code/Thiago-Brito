const returnNumber=(nums:number[], target:number) =>{
    let x 
    let y 
 
   for(x of nums){
    for(y of nums){
        if(x+y === target){
         return nums.indexOf(x,y)
        }
    }
   }
}
console.log(returnNumber([1,39,3,4], 40))