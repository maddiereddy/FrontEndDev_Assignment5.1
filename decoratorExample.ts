/**
 * Created by maddie on 12/7/16.
 */

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

function test1(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>){
    console.log(`I'm here in test1()`)
}

function test2(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>){
    console.log(`I'm here in test2()`)
}

class Test {
    @test1
    @test2
    method(){
        console.log(`I'm in the method()`)
    }
}

let testDecorator = new Test();
testDecorator.method();


console.log("*********************************************")


function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value
    descriptor.value = function(...args: any[]){
        console.log("The method args are: " + JSON.stringify(args))
        let result = originalMethod.apply(this, args)
        console.log("The return value is: " + result)
        return result
    }
    return descriptor
}

function enumerable(isEnumerable: boolean) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        descriptor.enumerable = isEnumerable;
        console.log(`Is enumerable: ${descriptor.enumerable}`)
        return descriptor;
    };
}

class TestEx {

    @log
    @enumerable(false)
    add(num1: number, num2: number): number {
        return (num1 + num2)
    }
}

let dec = new TestEx()
console.log(dec.add(2, 5))

