const renderLinkedList = (linkedlist) => {
  const boxElement = document.querySelector(".box");
  boxElement.querySelectorAll(".box_item").forEach((item) => item.remove());
  let current= linkedlist.head;
  if(linkedlist.head===null){
      return;
  }
  for(let i =0;i<linkedlist.size() && current!==null;i++){
    const itemElement=document.createElement("DIV");
    itemElement.classList.add("box_item");
    itemElement.classList.add('icon', 'icon-arrow-right');
    itemElement.textContent = current.element;
    boxElement.append(itemElement);
    current = current.next;
  }
};

export default renderLinkedList;