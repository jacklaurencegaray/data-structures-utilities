export default class Queue<T> {
  queue: T[] = [];

  constructor(initialQueue: T[] = []) {
    this.queue = [...initialQueue];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  deque() {
    if (this.queue.length) {
      return this.queue.shift();
    }
  }

  preview() {
    return [...this.queue];
  }
}
