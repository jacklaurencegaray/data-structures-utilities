export class BinaryTree<T> {
  left: BinaryTree<T>;
  right: BinaryTree<T>;
  data: T;

  constructor(value: T) {
    this.data = value;
  }

  static build(values: unknown[]) {
    values.forEach(value => {});
  }
  
  insert(value: T) {
    if (value <= this.data) {
      this.left.insert(value);
    } else if (value > this.data {
      this.right.insert(value);           
    }
  }
}
