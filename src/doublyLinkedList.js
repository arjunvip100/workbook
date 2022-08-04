class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail=this.head;
        this.length=1;
    }
////                                                Append                                                 //////

    append(value) {
        const newNode= {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev=this.tail;
        this.tail.next=newNode;  //here we are displacing the pointer only towards the next node through next
        this.tail=newNode;      // here we are placing the tail value from head to as new node tail
        this.length++
        return this
    }

    prepend(value){
        const newNode={
            value: value,
            next: null,
            prev: null
        }                       //2-->10-->16-->26
        newNode.next=this.head; //new node pointer(-->) points (2) heads ,not tail
        this.head.prev=newNode;
        this.head=newNode;      //assigning this.head (2) as newNode Value
        this.length++
        return this
    }

    printlist() {
        let array1 = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array1.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array1;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode={                 //creating new node for value 89
            value: value,
            next: null
        };
        const leader= this.traverseToIndex(index-1)             //leader which is the previous one of targeting index
        const follower = leader.next;                     //holds the targeted value and index
        leader.next = newNode;                                   //leader.next now got the new node 89
        newNode.next = follower;                           //holding pointer now connected to the 
        follower.prev = newNode;                                                       //next node which is in no use
      this.length++;   
    //   console.log(this)                                                                                   
        return this.printlist
    }
    traverseToIndex(index){
        let counter=0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++; 
        }
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index-1);  //leader 10
        const unwantedNode = leader.next;              //which we wanted to delete 89
        leader.next = unwantedNode.next;            //the next one of which we want to delete 16
        unwantedNode.prev = leader
        this.length--;              //decreasing the length cuz we are removing a node
        
    }

}
const myList = new LinkedList(10);
myList.append(16)
myList.append(26)
myList.prepend(2)
myList.insert(2,89)
myList.remove(2)
let arr = myList.printlist();


console.log(arr)
console.log(myList)