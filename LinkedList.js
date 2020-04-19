class Node{
    constructor(left, val, right){
        this.left = left;
        this.val = val;
        this.right = right;
    }
}

class LinkedList {
    constructor(value){
        this.current = new Node(null, value, null);
        this.head = this.current.left;
        this.tail = this.current.right;
    }
    
    addLeft(value){
        const n = new Node(null, value, null);
        const prevH = this.head || this.current;
        n.right = prevH;
        this.head = n;
        prevH.left = n;

        if(!this.current.left){
            this.current.left = this.head;
        }
    }

    addRight(value){
        const n = new Node(null, value, null);
        const prevT = this.tail || this.current;
        n.left = prevT;
        this.tail = n;
        prevT.right = n;

        if(!this.current.right){
            this.current.right = this.tail;
        }
    }

    next(){
        if(this.current.right){
            this.current = this.current.right;
            return true;
        }

        return false;
    }

    prev() {
        if(this.current.left){
            this.current = this.current.left;
            return true;
        }

        return false;
    }

    beginig(){
        this.current = this.head;
    }

    end(){
        this.current = this.tail;
    }

    get value() {
        return this.current.val;
    }
}

var list = new LinkedList('a');
list.addLeft('x');
list.addLeft('y');
list.addLeft('z');
list.addRight('b');
list.addRight('c');
//console.log(list);

console.log(" -> ");
list.beginig();
console.log(list.value);
while(list.next()){
    console.log(list.value);
}

console.log("<-");
list.end();
console.log(list.value);
while(list.prev()){
    console.log(list.value);
}
