function desorder(num) {
    let newstr = String(num)
    let newArr = newstr.split("")
    let decArr = newArr.sort(function (x,y) {return y-x})
    let joinArr = decArr.join("")
    return joinArr
      
}
console.log(desorder(22436985)) 
  