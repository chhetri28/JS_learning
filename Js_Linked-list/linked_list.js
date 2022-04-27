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

  getElementAt(index) {
    if (index < 0 || index > this.size()) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current;
  }

  removeAt(index){
    if (index < 0 || index > this.size()) {
        return undefined;
    }
    let current=this.head;
    if(index===0){
        this.head=current.next;
    }else{
        const previous=this.getElementAt(index-1);
        current=previous.next;
        previous.next=current.next;
    }
    this.count--;
    return current.element;
  }
  remove(element){
      const index =this.indexOf(element);
      return this.removeAt(index);
  }
  insertAt(element,index){
    if (index < 0 || index > this.size()) {
        return undefined;
      }
  
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
  
      this.count++;
      return node;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const linkedListArr = [];
    let current = this.head;
    for (let i = 0; i < this.size() && current !== null; i++) {
      linkedListArr.push(current.element);
      current = current.next;
    }

    return linkedListArr.join(', ');
  }
  size() {
    return this.count;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}

export default LinkedList;
