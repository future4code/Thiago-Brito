const robber = (arr:number[]) =>{
if( arr == null || arr.length == 0) {
        return 0
    }
    let houses  = []
    houses[0] = arr[0]
    houses[1] = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++){
        houses[i] = Math.max(houses[i-1], arr[i] + houses[i-2])
    }
    return houses[arr.length - 1]

}
console.log(robber([1,2,3,4,5]))