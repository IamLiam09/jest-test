function analyzeArray(array){
    let arr = [...array]
    let average = averageFun()
    let min = minFun()
    let max = maxFun()
    let length = lengthFun()
    function averageFun(){
        let total = Math.floor(array.length / 2)
        return arr[total]
    }
    function minFun(){
        return Math.min(...array)
    }
    function maxFun(){
        return Math.max(...array)
    }
    function lengthFun(){
        return array.length
    }
    return { 
        average,
        min,
        max,
        length}
}
analyzeArray([1,8,3,4,2,6])
// console.log(object)
module.exports = analyzeArray