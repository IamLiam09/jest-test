const caesarCipher = function(string, num) {
    let original = string
    let alphabet = ("abcdefghijklmnopqrstuvwxyz")
    let capAlphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    let stringarr = [...original]
    let samplearr = []
    let resultArr = []
    let finalResult = ""
    for(let i = 0; i < stringarr.length; i++){
        if(stringarr[i].includes("!")  || stringarr[i].includes(",") || stringarr[i] === " "){
            samplearr.push(stringarr[i])
            let toTakeFirstChar = samplearr.pop()
            resultArr.push(toTakeFirstChar)
            finalResult = finalResult + resultArr.pop()
            continue
        }
        if(stringarr[i] === stringarr[i].toUpperCase()){
            let firstchar = stringarr[i]
            let numAtTheIndex = capAlphabet.indexOf(firstchar)
            let newNum = numAtTheIndex + num
            if(newNum > 25){
                newNum = newNum - 26
            }
            if(newNum < -1){
                newNum = newNum + 26
            }
            samplearr.push(newNum)
            let toTakeFirstChar = samplearr.pop()
            resultArr.push(capAlphabet[toTakeFirstChar])
            finalResult = finalResult + resultArr.pop()
        }else{
            let firstchar = stringarr[i]
            let numAtTheIndex = alphabet.indexOf(firstchar)
            let newNum = numAtTheIndex + num
            if(newNum > 25){
                newNum = newNum - 26
            }
            if(newNum < -1){
                newNum = newNum + 26
            }
            samplearr.push(newNum)
            let toTakeFirstChar = samplearr.pop()
            resultArr.push(alphabet[toTakeFirstChar])
            finalResult = finalResult + resultArr.pop()
        }

    }
    return finalResult
};
caesarCipher("z", 1)
caesarCipher("A", 1)
caesarCipher("a", 1)
caesarCipher("Hello, World!", 5)
module.exports = caesarCipher;
