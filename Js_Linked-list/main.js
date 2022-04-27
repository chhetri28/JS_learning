import LinkedList from "./linked_list.js";
import renderLinkedList from './render.js';
import initiateHandlers from './ui_handlers.js';


const linkedlist = new LinkedList();
const main = () => {
    console.log(linkedlist.isEmpty());
    console.log(linkedlist.size());

    initiateHandlers(linkedlist,renderLinkedList);
    renderLinkedList(linkedlist);
};
main();