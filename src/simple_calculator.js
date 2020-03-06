function add(num1,num2){
    return num1 + num2
}


function add(){
    var sum = 0;
    for (i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}

/// MULTIPLICATION ///

function multiply(num1,num2){
    return num1 * num2
}



function multiply(){
    var product = 1;
    for (i = 0; i<arguments.length; i++){
        product *= arguments[i]
    }
    return product;
}

module.exports = { add,multiply}