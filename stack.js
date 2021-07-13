class Stack {
    constructor(){
        this.arr = [];
    }

    add(data){
        this.arr.push(data);
    }

    delet(){
        this.arr.pop()
    }

    current() {
        let a = this.arr.length - 1;
        return this.arr[a];
    }
}



let stack = new Stack();

stack.add(1)


stack.add(2)

stack.delet()

stack.add(3)

console.log(stack.current())

console.log(stack)