String.prototype.toAlternatingCase = function () {
    let newString = ''
    for(const l of this){
        if(l===l.toUpperCase()){
            newString = newString + l.toLowerCase()
        }else {
            newString= newString + l.toUpperCase()
        }
    }
    return newString
}