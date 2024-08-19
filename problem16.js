function filname(str) {
    let addStr = ""
    for(let i = 0; i <str.length; i++){
        if (i % 2 ===0) {
          addStr += str[i]
        }
    }
    return addStr
    
}
console.log(filname("Neetu"))
console.log(filname("Neha"))