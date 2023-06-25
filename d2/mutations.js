

function mutations(arr){
    const firstword = arr[0].toLowerCase()
    const secondWord = arr[1].toLowerCase()

    for(var i=0; i<secondWord.length; i++){
        if(firstword.indexOf(secondWord[i]) === -1)return false
        
    }
    return true
}

console.log(mutations(['hello', 'hezo']))