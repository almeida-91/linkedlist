function newNode() {
    return{
        value : null,
        nextNode : null,
    }
}

function newlinkedList(){
    return{
        head : newNode(),
        tail : newNode(), 
    }
}

let linkedList = newlinkedList();


// add value to the end of the list
// if head is null, head gets value and tail gets updated
// else create new node and add it to the end of the list,
// becoming the tail
function append(value) {
    let toInsert = newNode();
    toInsert.value = value;
    if (linkedList.head.value == null) {
        linkedList.head = toInsert;
        linkedList.tail = linkedList.head;
        return linkedList.head;
    } else {
        linkedList.tail = toInsert;
    }
    return linkedList.tail;
}

// add value to the beginning of the list
// if list is empty, append
// else create a new node with pointer to head, change head to new node
function prepend(value) {

    if (linkedList.head.value == null){
        return append(value);
    } else {
        let toInsert = newNode();
        toInsert.value = value;
        toInsert.nextNode = linkedList.head;
        linkedList.head = toInsert;
    }
    return linkedList.head;
}