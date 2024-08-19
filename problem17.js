function fibarr(num) {
    let array = [1,1]
    for (let i = 2; i < num; i++) {
        array[i]= array [i-1] + array[i-2]       
    }
    return array[array.length-1] 
    
}
console.log(fibarr(18))

function newfab(num) {
    if(num === 1 || num === 2){
        return 1
    }
    else {
        return newfab(num-1) +newfab(num-2)

    }  
}
console.log(newfab(8))
console.log(newfab(1))