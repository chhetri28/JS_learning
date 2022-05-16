export const defaultBSTUIConfig = {
    HIGHLIGHT_CLASS: 'node__element--highlight',
    HIGHLIGHT_TIME: 300,
};
class BinarySearchTreeUI{
    highlightTimer = null;
    actionsContainerSelector;
    constructor(
        tree,
        render,
        treeContainerSelector = '.tree',
        actionsContainerSelector = '.bst-actions-container',
        config = {
          HIGHLIGHT_CLASS: 'node__element--highlight',
          HIGHLIGHT_TIME: 300,
        }
      ){
        this.treeContainerSelector = treeContainerSelector;
        this.actionsContainerSelector = actionsContainerSelector;
        this.config = config;
        this.tree = tree;
        this.render = render || this.renderTree;
        const root = document.documentElement;
        root.style.setProperty(
          '--animation-timing',
          `${this.config.HIGHLIGHT_TIME / 1000}s`
        );
      }
      
}