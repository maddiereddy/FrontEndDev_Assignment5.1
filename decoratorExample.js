/**
 * Created by maddie on 12/7/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Show Decorator composition, using decorator factories:

 Create two decorator like @test1 and @test2 and class Test, then
 class Test {
     @test1()
     @test2()
     method(){}
 }

 Console execution flow of this.
 */
function test1(target, propertyKey, descriptor) {
    console.log("I'm here in test1()");
}
function test2(target, propertyKey, descriptor) {
    console.log("I'm here in test2()");
}
var Test = (function () {
    function Test() {
    }
    Test.prototype.method = function () {
        console.log("I'm in the method()");
    };
    __decorate([
        test1,
        test2
    ], Test.prototype, "method", null);
    return Test;
}());
var testDecorator = new Test();
testDecorator.method();
console.log("*********************************************");
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log("The method args are: " + JSON.stringify(args));
        var result = originalMethod.apply(this, args);
        console.log("The return value is: " + result);
        return result;
    };
    return descriptor;
}
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = isEnumerable;
        console.log("Is enumerable: " + descriptor.enumerable);
        return descriptor;
    };
}
var TestEx = (function () {
    function TestEx() {
    }
    TestEx.prototype.add = function (num1, num2) {
        return (num1 + num2);
    };
    __decorate([
        log,
        enumerable(false)
    ], TestEx.prototype, "add", null);
    return TestEx;
}());
var dec = new TestEx();
console.log(dec.add(2, 5));
