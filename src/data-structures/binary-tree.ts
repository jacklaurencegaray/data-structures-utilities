// TODO: Fix this

export class BinaryTree<T> {
  left: BinaryTree<T>;
  right: BinaryTree<T>;
  data: T;

  constructor(value: T) {
    this.data = value;
  }

  // TODO: Typing here!
  static build(values: unknown[]) {
    values.forEach(value => {
      // TODO: Fix this!
    });
  }

  insert(value: T) {
    if (value <= this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree<T>(value);
      }
    } else if (value > this.data) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTree<T>(value);
      }
    }
  }
}
