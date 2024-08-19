function mulnot10(arrnum) {
    let array = []
    for(let i = 0; i <arrnum.length; i++){
        if(arrnum[i] % 10 !== 0 )
            array.push (arrnum[i])   
    }
    return array

    
}
console.log(mulnot10([2,20,40,83,2]))
console.log(mulnot10([2,83,82,100,2]))
   