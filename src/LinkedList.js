class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail=this.head;
        this.length=1;
    }
////                                                Append                                                 //////

    append(value) {
        const newNode= {
            value: value,
            next: null
        }
        this.tail.next=newNode;  //here we are displacing the pointer only towards the next node through next
        this.tail=newNode;      // here we are placing the tail value from head to as new node tail
        this.length++
        return this
    }

    prepend(value){
        const newNode={
            value: value,
            next: null
        }                       //2-->10-->16-->26
        newNode.next=this.head; //new node pointer(-->) points (2) heads ,not tail
        this.head=newNode;      //assigning this.head (2) as newNode Value
        this.length++
        return this
    }

    printlist() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}
const myList = new LinkedList(10);
myList.append(16)
myList.append(26)
myList.prepend(2)
myList.printlist();
console.log(myList)
