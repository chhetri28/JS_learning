const initiateHandlers=(linkedlist,renderLinkedList)=>{
    const pushBtn=document.querySelector('#pushBtn');
    const insertAtBtn = document.querySelector('#insertAtBtn');
    const removeElementBtn = document.querySelector('#removeElementBtn');
    const getElementAtBtn = document.querySelector('#getElementAtBtn');
    const indexOfBtn = document.querySelector('#indexOfBtn');
    const removeElementAtBtn = document.querySelector('#removeElementAtBtn');
    const toStringBtn = document.querySelector('#toStringBtn');
    const sizeBtn = document.querySelector('#sizeBtn');
    const isEmptyBtn = document.querySelector('#isEmptyBtn');
    const clearBtn = document.querySelector('#clearBtn');
    

    pushBtn.addEventListener('click',()=>{
        const element= prompt('Enter element to add to linkedlist');
        linkedlist.push(element);
        renderLinkedList(linkedlist);
    });
    indexOfBtn.addEventListener('click',()=>{
        const element=prompt('Enter element you want to find index of');
        const index= linkedlist.indexOf(element);
        if(index >=0){
            alert(`Index of element'${element}' is ${index}`);
        }else{
            alert('Element not found');
        }
    });
    insertAtBtn.addEventListener('click',()=>{
        const element = prompt('Enter element to add to linkedlist');
        const index = prompt('Enter the index the element is to be added at');
        linkedlist.insertAt(element, Number(index));
        renderLinkedList(linkedlist);
    });
    removeElementBtn.addEventListener('click',()=>{
        const element=prompt('Enter the element to remove from linkedlist');
        const removedE1=linkedlist.remove(element);
        if (removedE1) {
            alert('Element removed');
            renderLinkedList(linkedlist);
          } else {
            alert('Element not found');
        }
    });
    getElementAtBtn.addEventListener('click', () => {
        const index = prompt('Enter the index the element is to be retrieved from');
        const node = linkedlist.getElementAt(Number(index));
        if (node) {
          alert(`Element retrieved = ${node.element}`);
        } else {
          alert('Element not found');
        }
      });
    toStringBtn.addEventListener('click', () => {
        alert(linkedlist.toString());
    });
    removeElementAtBtn.addEventListener('click',()=>{
        const element= prompt('Enter element to remove from linkedlist');
        const removedE1=linkedlist.remove(element);
        if (removedE1) {
            alert('Element removed');
            renderLinkedList(linkedlist);
          } else {
            alert('Element not found');
          }
    });
    sizeBtn.addEventListener('click', () => {
        alert(`The size of the linked list is ${linkedlist.size()}`);
      });
    
    isEmptyBtn.addEventListener('click', () => {
        alert(`Linked list is${linkedlist.isEmpty() ? '' : ''} empty`);
    });


    clearBtn.addEventListener('click', () => {
        linkedlist.clear();
        alert('Linked list cleared');
        renderLinkedList(linkedlist);
    });
};

export default initiateHandlers;