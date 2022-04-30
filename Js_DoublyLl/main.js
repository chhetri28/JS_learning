import DoublyLinkedList from "./doublylinked_list.js";
import initiateHandlers from "../Js_Linked-list/ui_handlers.js";
import renderLinkedList from "./render.js";

const doublyLinkedList=new DoublyLinkedList();
const main=()=>{
    console.log("Hello")
    initiateHandlers(doublyLinkedList,renderLinkedList);
    renderLinkedList(doublyLinkedList);
}
main();