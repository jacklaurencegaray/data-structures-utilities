// TODO continue this

export type Comparator = (...args: any[]) => boolean

export class BinaryTree<T> {
  left: BinaryTree<T>;
  right: BinaryTree<T>;
  data: T;

  constructor(value: T) {
    this.data = value;
  }
  
  insert(value: T) {
    
  }
  
  static build(arr: T[], comparator: Comparator) {
     if (arr.length) {
        const root = new BinaryTree<T>(arr[0]);
        arr.slice(1, arr.length).forEach(val => root.insert(val));
        return root;
     } else {
       throw new Error("Cannot build a BST from an empty array.");
     }
  }
}
