class Queue {
  items = {};
  itemToAddKey = 0;
  itemToRemoveKey = 0;
  enqueue(item) {
    this.items[this.itemToAddKey] = item;
    this.itemToAddKey++;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = {};
    this.itemToAddKey = 0;
    this.itemToRemoveKey = 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.itemToRemoveKey];
    delete this.items[this.itemToRemoveKey];
    this.itemToRemoveKey++;
    return item;
  }
  size() {
    return this.itemToAddKey - this.itemToRemoveKey;
  }
  peek() {
    return this.items[this.itemToRemoveKey];
  }
}
const myQueue= new Queue();

const peekQueueItem = () => {
    const peekedElement = document.querySelector(".stack_item:first-child");
    if (!peekedElement) {
      return;
    }
    peekedElement.classList.add("peeking");
    setTimeout(() => {
      peekedElement.classList.remove("peeking");
    }, 500);
};
const renderQueue= () => {
    const queueElement = document.querySelector(".stack");
    queueElement
      .querySelectorAll(".stack_item")
      .forEach((item) => item.remove());//remove all the previous items
      for (const key in myQueue.items) {
         const item=myQueue.items[key];
         const QueueItemElement = document.createElement("DIV"); //creating div
      QueueItemElement.classList.add("stack_item"); //giving div a class
      QueueItemElement.textContent = item; //assigning the content
      queueElement.append(QueueItemElement); //using prepend to add before the previous element
      }
};
const initiateHandlers = () => {
    const addItemBtn = document.querySelector("#addItemBtn");
    const popItemBtn = document.querySelector("#popItemBtn");
    const peekItemBtn = document.querySelector("#peekItemBtn");
    const clearItemBtn = document.querySelector("#clearItemBtn");


    clearItemBtn.addEventListener("click",()=>{
        myQueue.clear();
        renderQueue();
    });
    addItemBtn.addEventListener("click", () => {
      const randomNumber = Math.round(Math.random() * 50 - 1);
      myQueue.enqueue(randomNumber);
      renderQueue();
    });
    popItemBtn.addEventListener("click", () => {
      myQueue.dequeue();
      renderQueue();
      peekQueueItem();
    });
    peekItemBtn.addEventListener("click", () => {
        peekQueueItem();
      // const peekedElement = document
      //     .querySelector(".stack_item:first-child");
      // if (!peekedElement) {
      //     return;
      // }
      // peekedElement.classList.add("peeking");
      // setTimeout(() => {
      //     peekedElement.classList.remove("peeking");
      // }, 500);
    });
};
const main=()=>{
    myQueue.enqueue(10);
    myQueue.enqueue(20);
    myQueue.enqueue(30);
    
    // myQueue.dequeue();
    console.log("isEmpty => ",myQueue.isEmpty());
    // myQueue.clear();
    console.log("size => ",myQueue.size());
    console.log("peek => ",myQueue.peek());
    console.log("myQueue => ",myQueue);
    renderQueue();
    peekQueueItem();
    initiateHandlers();
}
main();