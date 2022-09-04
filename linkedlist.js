function newNode() {
    return{
        value : null,
        nextNode : null,
    }
}

function newLinkedList(){
    return{
        head : newNode(),
        tail : newNode(),

        prepend(value) {
        if (this.head.value == null){
            return append(value);
        } else {
            let toInsert = newNode();
            toInsert.value = value;
            toInsert.nextNode = this.head;
            this.head = toInsert;
        }
        return this.head;
        },

        append(value) {
            let toInsert = newNode();
            toInsert.value = value;
            if (this.head.value == null) {
                this.head = toInsert;
                this.tail = this.head;
                return this.head;
            } else {
                this.tail.nextNode = toInsert;
                this.tail = toInsert;
            }
            return this.tail;
        },

        size() {
            let cur = this.head;
            let size = 0;
            while ( cur.value != null){
                size++;
                cur = cur.nextNode;
            }
            return size;
        },

        at(index) {
            if (this.head.value == null) return 'List is empty!'
            if (index < 0 || index == null) return 'Please enter a number equal or greater than 0';
            let counter = 0;
            let currentNode = this.head;
            while (counter != index){
                if (currentNode.nextNode == null) return 'Index is greater than the list size';
                currentNode = currentNode.nextNode;
                counter++;
            }
            return currentNode.value;         
        },

        pop() {
            if (this.head.value == null) return 'List is empty!'
            if (this.head.nextNode == null) { // List has 1 element
                this.head = newNode();
                this.tail = newNode();
                return;
            }
            this.tail = null;
            let prevNode = null;
            let currentNode = this.head;
            while (currentNode.nextNode != null) {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            prevNode.nextNode = null;
            this.tail = prevNode;
        },
        
    }
}



let LinkedList = newLinkedList();




