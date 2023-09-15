class Node {
    constructor(data){ 
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val){
        newNode = new Node(val);
        if(!this.head){ 
            this.head=newNode ;
            return this;
        }
        newNode.next=this.head;
        this.head=newNode;
        return self;
    }
}