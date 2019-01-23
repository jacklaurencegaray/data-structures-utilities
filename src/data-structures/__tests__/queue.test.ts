import Queue from "../queue";

test("queue enqueue and deque works", () => {
  let queue = new Queue<Number>();
  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.deque()).toBe(1);
  expect(queue.deque()).toBe(2);
});

test("queue pop works even when empty", () => {
  let queue = new Queue<Number>();

  expect(queue.deque()).toBe(undefined);
});

test("queue can be initialized with predefined elements", () => {
  let queue = new Queue<Number>([1, 2, 3, 4]);

  queue.deque();
  queue.deque();

  expect(queue.deque()).toBe(3);
});
