// TODO continue this

export type Comparator = (...args: any[]) => boolean

export class BinaryTree {
  left: BinaryTree;
  right: BinaryTree;
  data: number;

  constructor(value) {
    this.data = value;
  }
  
  delete(value) {
    // TODO 
  }
  
  insert(value) {
    if (value <= this.data) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BinaryTree(value) 
      }
    } else if (value > this.data) {
      if (this.right) {
        this.right.insert(value) 
      } else {
        this.right = new BinaryTree(value) 
      }
    }
  }
  
  search(value) {
    if (this === null) return false 
    if (this.data === value) return true
    
    if (value <= this.data) {
      return this.left.search(value) 
    } else if (value > this.data) {
      return this.right.search(value) 
    }
  }
  
  static build(arr: number[], comparator: Comparator) {
     if (arr.length) {
        const root = new BinaryTree(arr[0]);
        arr.slice(1, arr.length).forEach(val => root.insert(val));
        return root;
     } else {
       throw new Error("Cannot build a BST from an empty array.");
     }
  }
  
  delete(value) {
     // 1. Go to either of the two:
       // Leftmost node of the right subtree (min of the bigger subtree)
       // Rightmost node of the left subtree (max of the smaller subtree)
    // 2. Swap the current node with `value` with the value of the selected node (in 1).
    // 3. TODO: Continue this
  }
}
