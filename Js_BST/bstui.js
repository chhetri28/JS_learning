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
      traverseUINodes(nodes) {
        nodes.reduce((pr, node) => {
          return pr.then(() => this.highlightNode(node));
        }, Promise.resolve());
      }
      getTreeUI(node) {
        const { left, right, value } = node;
        if (!node) {
          return '';
        }
        return `
          <div class="node__element" data-node-id="${value}">${value}</div>
          ${
            left || right
              ? `
                <div class="node__bottom-line"></div>
                <div class="node__children">
                <div class="node node--left">
                  ${left ? this.getTreeUI(left) : ''}
                </div>
                <div class="node node--right">
                  ${right ? this.getTreeUI(right) : ''}
                </div>
                </div>
              `
              : ''
          }
        `;
      }
      renderTree(
        node = this.tree.root,
        containerSelector = this.treeContainerSelector
      ) {
        const treeContainer = document.querySelector(containerSelector);
        if (!node) {
          return (treeContainer.innerHTML = '');
        }
        const template = this.getTreeUI(node);
        treeContainer.innerHTML = template;
      }
      highlightNode({ value }) {
        const nodeElement = document.querySelector(`[data-node-id="${value}"]`);
        if (this.highlightTimer !== null) {
          clearTimeout(this.highlightTimer);
          nodeElement.classList.remove(this.config.HIGHLIGHT_CLASS);
          this.highlightTimer = null;
          return;
        }
      }
}