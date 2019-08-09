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
}
