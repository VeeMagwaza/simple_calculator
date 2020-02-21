function add(){
    var sum = 0;
    for (i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}



/// MULTIPLICATION ///

function multiply(){
    var product = 1;
    for (i = 0; i<arguments.length; i++){
        product *= arguments[i]
    }
    return product;
}

console.log(add(1,2));
console.log(add(-1,-1))
console.log(add(1,2,3,4,5))
console.log(multiply(1,3))
console.log(multiply(-1,3))
console.log(multiply(1,2,3,4,5))

module.exports = { add, multiply}