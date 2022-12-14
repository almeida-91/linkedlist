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
            return this.toString();
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
            return this.toString();
        },

        size() {
            let cur = this.head;
            let size = 0;
            while ( cur != null){
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
            return this.toString();
        },

        contains(value) {
            if (this.head.value == null) return 'List is empty!';
            if (value == null) return 'Please enter a value.';
            let currentNode = this.head;
            while (currentNode != null){
                if (currentNode.value == value) return true;
                currentNode = currentNode.nextNode;
            }
            return false;
        },

        find(value) {
            if (this.head.value == null) return 'List is empty!';
            if (value == null) return 'Please enter a value.';
            let index = 0;
            let currentNode = this.head;
            while (currentNode!=null){
                if (currentNode.value == value) return index;
                currentNode = currentNode.nextNode;
                index++;
            }
            return null;
        },

        toString(){
            if (this.head.value == null) return 'List is empty!';
            let currentNode = this.head;
            let string = "";
            while (currentNode != null){
                string += `( ${currentNode.value} ) -> `;
                currentNode = currentNode.nextNode;
            }
            string += ' null';
            console.log(string);
        },

        insertAt(value,index){
            if (this.head.value == null) return 'List is empty!';
            if (value == null) return 'Please enter a value.';
            if (index < 0 || index == null) return `Please enter an index greater than or equal to 0 `;
            let prevNode = null;
            let currentNode = this.head;
            let currentIndex = 0;
            let toInsert = newNode();
            toInsert.value = value;
            while (currentNode!=null){
                if (currentIndex == index){
                    toInsert.nextNode = currentNode.nextNode;
                    if (prevNode == null){
                        this.head = toInsert;
                    } else prevNode.nextNode = toInsert;
                    if (currentNode.nextNode == null){
                        this.tail = toInsert;
                        prevNode.nextNode = toInsert;
                    }
                    currentNode = null;
                    return this.toString();
                }
                currentIndex++;
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            return `Please enter an index between 0 and ${currentIndex-1}`;
        },

        
    }
}



let LinkedList = newLinkedList();

LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);



