

class Node {

    constructor(data){

        this.data = data;
        this.next = null;
    }
}

var head;

const add = (data) => {

    if(head == null){

        head = new Node(data);

    }else{

        current = head;

        while(current.next){

            if(current.data == data)

            prev = current;

            current = current.next;

        }

        newnode = new Node(data);

        current.next = newnode;

    }

}

const delet = (data) => {

    current = head;

    while(current.next){

        prev = current;

        current = current.next;

        if(head.data == data){

            head =current;

        }else{

            if(current.data == data){

                prev.next = current.next;
            }
        }
    }

}

const display = () => {

    current =head;

    let str = "\n";

    while(current){

        str = str + current.data + " -> ";

        current = current.next;
    }

    console.log(str + " NULL")

}

const reverse = () => {

    newlist = head;

    current = head.next;

    newlist.next = null;

    while(current){

        prev = current;

        current = current.next;

        prev.next = newlist;

        newlist = prev;

    }

    head =newlist;

}

const max = () => {

    current = head;

    let max = 0;

    while(current){

        if(current.data > max){

            max = current.data;

        }

        current = current.next;
    }

    return max;

}


const appendLastN = (n) => {

    let size = 1 

    let i =1;

    last = head;

    while(last.next){

        last = last.next;

        size++;
    }

    current = head;

    while(i <= size - n){

        prev = current

        current = current.next;

        i++;

    }

    last.next = head;
    
    prev.next = null;

    head = current;

}

const reverseN = (n) => {

    let i = 0;

    temp = head;

    while(i < n){

        temp = temp.next;

        i++;
    }

    prev = temp;

    i = 0 ;

    current = head;

    newlist =  null;

    while(i < n){

        newlist = current.next;

        current.next = prev;

        prev = current;

        current = newlist;

        i++;
    }

    head = prev;

}


const prompt = require("prompt-sync")({ sigint: true });

let choice = -1;

while(choice!= 0){

    console.log("\n1. Insert")
    console.log("2. Delete")
    console.log("3. Reverse")
    console.log("4. Display")
    console.log("5. Find Max")
    console.log("6. Append Last N")
    console.log("7. Reverse N")
    console.log("0. Exit\n")

    choice = prompt("Enter Choice :");

    choice = parseInt(choice);

    switch(choice){

        case 1 : 
            data = prompt("Enter Data :"); 
            add(parseInt(data));
            break;

        case 2 :
            data = prompt("Enter Data to delete:"); 
            delet(parseInt(data));
            break;

        case 3 :
            reverse();
            break;

        case 4 :
            display();
            break;

        case 5 :
            console.log("Max : "+max());
            break;

        case 6 :
            data = prompt("Enter No of Elements :"); 
            appendLastN(data);
            break;

        case 7 :
            data = prompt("Enter No of Elements :"); 
            reverseN(data);
            break;

        case 0 : 
            return ;

    }


}




