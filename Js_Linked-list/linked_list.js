const defaultEqFn = (a, b) => a === b;

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  constructor(equalsFn = defaultEqFn) {
    this.head = null;
    this.count = 0;
    this.equalsFn = equalsFn;
  }
  push(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.count++;
  }
  indexOf(element){
      let current=this.head;
      for(let i =0;i<this.size() && current!=null;i++){
        if(this.equalsFn(element,current.element)){
            return i;
        }
        current=current.next;
      }
      return -1;
  }
  remove(element){
      const index =this.indexOf(element);
      return this.removeAt(index);
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size === 0;
  }
}

export default LinkedList;
