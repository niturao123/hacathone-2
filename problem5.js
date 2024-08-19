function getMiddle(str) {
    if (str.length % 2 !== 0) {
        let length = str.length
        let middlenum = Math.floor(length / 2)
        console.log(str[middlenum])
    }
    else {
        let lenght= str.length
        let middlenum=str.length / 2
        let output= str[middlenum-1]+str[middlenum]
        console.log(output)
    }
}
getMiddle("muskan")
getMiddle("shabnam")
getMiddle("Nitu")