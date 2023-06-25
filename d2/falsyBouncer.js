// remove all falsy values from an array

function bouncer(arr){
    return arr.remove(false, 'null', '', 'undefined', NaN)
    
}
console.log(bouncer([7,'ate','',false,9]))