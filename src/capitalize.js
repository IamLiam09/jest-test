const capitalize = function(word){
    let capitalWord = word[0].toUpperCase() + word.substring(1)
    return capitalWord
}
capitalize("barbie")
module.exports  = capitalize