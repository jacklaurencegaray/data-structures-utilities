import Stack from "../stack"

test("stack push and pop works", () => {
  let stack = new Stack<Number>()
  stack.push(1)
  stack.push(2)

  expect(stack.pop()).toBe(2)
  expect(stack.pop()).toBe(1)
})

test("stack pop works even when empty", () => {
  let stack = new Stack<Number>()

  expect(stack.pop()).toBe(undefined)
})
