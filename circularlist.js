class Node {
    constructor(data){

        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

var head;

const add = (data) => {

    if(head == null){

        newnode = new Node(data);

        newnode.next = newnode;

        newnode.prev = newnode;

        head = newnode;


    }else{

        current = head.prev;

        newnode = new Node(data);

        newnode.next = head;

        head.prev = newnode;

        newnode.prev = current;

        current.next = newnode;

    }

}

const delet = (data) => {

    current = head;

    while(current.next!= head){

        prev = current;

        current = current.next;

        if(head.data == data){

            last = head.prev;

            last.next = current;

            current.prev = last;

            head =current;

        }else{

            if(current.data == data){

                last = current.next;

                prev.next = last;

                last.prev = prev;

            }
        }
    }

}

const max = () => {

    current = head;

    let max = 0;

    while(current.next!= head){

        if(current.data > max){

            max = current.data;

        }

        current = current.next;
    }

    if(current.data > max)
        max = current.data;

    return max;
}

const display = () => {

    current = head;

    let str = "\n";

    while(current.next!= head){

        str = str + current.data + " <--> ";

        current = current.next;
    }

    str = str + current.data + " <--> ";

    console.log(str + " NULL")

}

add(1)
add(2)
add(3)

console.log(max())

display()

delet(3)

display()


console.log(head)