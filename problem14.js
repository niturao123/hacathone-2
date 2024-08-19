function mul10(arrnum) {
    let array = []
    for(let i = 0; i <arrnum.length; i++){
        if(arrnum[i] % 10 === 0 )
        array.push (arrnum[i])   
    }
    return array

    
}
console.log(mul10([2,20,40,83,2]))
    
