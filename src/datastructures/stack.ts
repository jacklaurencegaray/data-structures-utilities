export class Stack<T> {
  stack: T[] = []

  constructor(initialStack: T[] = []) {
    this.stack = [...initialStack]
  }

  push(element: T) {
    this.stack.push(element)
  }

  pop() {
    return this.stack.pop()
  }

  preview() {
    return [...this.stack]
  }
}
