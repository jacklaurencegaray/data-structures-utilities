export class Queue<T> {
  queue: T[] = []

  constructor(initialQueue: T[] = []) {
    this.queue = [...initialQueue]
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    if (!this.queue.length) {
      console.warn("Cannot dequeue from an empty queue.")
      return
    }
    return this.queue.shift()
  }

  preview() {
    return [...this.queue]
  }
}
