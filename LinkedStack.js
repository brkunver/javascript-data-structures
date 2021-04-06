class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedStack {
    constructor() {
        this.head = new Node(null, null);
    }
    isEmpty = () => {
        return this.head.value == null;
    }

    push = (value) => {
        if(this.isEmpty()) {
            this.head = new Node(value,null)
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = new Node(value,null)
        }
    }

    pop = () => {
        if (this.isEmpty()){
            throw "List is empty";
        }
        else{
            let current = this.head;
            while(current.next.next != null){
                current = current.next;
            }
            let value = current.next.value;
            current.next = null;
            return value;
        }
    }

    log = () => {
        if (this.isEmpty()) {
            console.log("List is empty")
        }
        else {
            let current = this.head;
            while (current != null){
                console.log(current.value);
                current = current.next;
            }
        }
    }

}

export default LinkedStack