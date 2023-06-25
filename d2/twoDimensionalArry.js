// function that splits an array (first argument) into groups the length of size (second argument)
//and returns them as a two-dimensional array


function chunckArrayInGroup(arr, size){
    var group = [];
    for(var i=0; i<arr.length; i++){
        group.push(arr.slice(0,size))
        arr=arr.slice(size)
    }
    
    return group
}
console.log(chunckArrayInGroup([1,2,3,4], 2))