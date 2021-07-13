class Queue {
    constructor(){
        this.arr = [];
    }

    add(data){
        this.arr.push(data);
    }

    delet(){
        this.arr.shift()
    }

    current() {
        return this.arr[0];
    }
}



let queue = new Queue();

queue.add(1)


queue.add(2)

queue.delet()

queue.add(3)

console.log(queue.current())

console.log(queue)