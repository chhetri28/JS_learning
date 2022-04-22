(() => {
  class Stack {
    items = [];
    push(item) {
      this.items.push(item);
    }
    isEmpty() {
      return this.items.length === 0;
    }
    clear(){
        this.items.length=0;
    }
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.pop();
    }
    size() {
      return this.items.length;
    }
    peek() {
      return this.items[this.items.length - 1];
    }
  }
  const decimalToBinary = (decimalNumber) => {
    const reminderStack = new Stack();
    let currentnumber = decimalNumber;
    let currentreminder;
    let binaryString = "";
    while (currentnumber > 0) {
      currentreminder = Math.floor(currentnumber % 2);
      //   console.log(currentreminder);
      reminderStack.push(currentreminder);
      addItemToStack(currentreminder);
      currentnumber = Math.floor(currentnumber / 2);
    }
    while (!reminderStack.isEmpty()) {
        const stackItem=reminderStack.pop();
        binaryString+=stackItem.toString();
    }
    return binaryString;
  };
//   const convertedValue=decimalToBinary(10);
//   console.log(convertedValue);
  const myStack = new Stack();
  const peekStackItem = () => {
    const peekedElement = document.querySelector(".stack_item:first-child");
    if (!peekedElement) {
      return;
    }
    peekedElement.classList.add("peeking");
    setTimeout(() => {
      peekedElement.classList.remove("peeking");
    }, 500);
  };
  const addItemToStack=(item)=>{
    // const randomNumber = Math.round(Math.random() * 50 - 1);
    myStack.push(item);
    renderStack();
  }
  const initiateHandlers = () => {
    const addItemBtn = document.querySelector("#addItemBtn");
    const popItemBtn = document.querySelector("#popItemBtn");
    const peekItemBtn = document.querySelector("#peekItemBtn");
    const dtoBConvertBtn =document.querySelector("#dtoBConvertBtn");

    dtoBConvertBtn.addEventListener("click",()=>{
        myStack.clear();
        const input =document.querySelector('#decimalToBinaryInput');
        decimalToBinary(Number(input.value));
    });
    addItemBtn.addEventListener("click", () => {
      const randomNumber = Math.round(Math.random() * 50 - 1);
    //   myStack.push(randomNumber);
    //   renderStack();
    addItemToStack(randomNumber);
    });
    popItemBtn.addEventListener("click", () => {
      myStack.pop();
      renderStack();
      peekStackItem();
    });
    peekItemBtn.addEventListener("click", () => {
      peekStackItem();
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

  // myStack.push(5);
  // myStack.push(10);
  const renderStack = () => {
    const stackElement = document.querySelector(".stack");
    stackElement
      .querySelectorAll(".stack_item")
      .forEach((item) => item.remove());
    myStack.items.forEach((item) => {
      //taking 1 element from the array
      const stackItemElement = document.createElement("DIV"); //creating div
      stackItemElement.classList.add("stack_item"); //giving div a class
      stackItemElement.textContent = item; //assigning the content
      stackElement.prepend(stackItemElement); //using prepend to add before the previous element
    });
  };
  renderStack();
  initiateHandlers();
//   const convertedValue=decimalToBinary(10);
//   console.log(convertedValue);
})();
