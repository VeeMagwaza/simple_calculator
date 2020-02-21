
const {add,multiply} = require("../src/simple_calculator")

describe("add", function(){

    it("should be able to add two numbers", function(){
        expect(add(1,2)).toEqual(3);
    });
    it("should be able to add two negative numbers", function(){
        expect(add(-1,-1)).toEqual(-2);

});
    
    // it("should be able to add two negative numbers", function(){
    //     expect(add(-1,-1)).toEqual(-2);
    })

    it("shoud be able to add more numbers", function(){
        expect(add(1,2,3,4,5)).toEqual(15);
    
})


// let multiply = require("../src/simple_calculator")

describe("multipy", function(){
    it("should be able to multiply two numbers", function(){
        expect(multiply(1,3)).toEqual(3);
    });

});

    it("should be able to multiply negative numbers", function(){
        expect(multiply(-1,3)).toEqual(-3);
    })

    it("shoud be able to multiply more numbers", function(){
        expect(multiply(1,2,3,4,5)).toEqual(120);
    
})