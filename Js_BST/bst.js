const COMPARISON = {
    EQUAL: 0,
    SMALLER: -1,
    GREATER: 1,
  };
  
const defaultCompareNumberFn = (a, b) => {
    if (Number(a) == Number(b)) {
      return COMPARISON.EQUAL;
    }
  
    return Number(a) < Number(b) ? COMPARISON.SMALLER : COMPARISON.GREATER;
};

class TreeNode {
    constructor(value, parent) {
      this.value = value.toString();
      this.parent = parent || null;
      this.left = null;
      this.right = null;
    }
  
    get isLeaf() {
      return this.left === null && this.right === null;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
}