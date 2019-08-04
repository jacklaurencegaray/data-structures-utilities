function LinkedList(val) {
    this.data = val
    this.next = null
}

LinkedList.prototype.toArray = function() {
    const result = []
    let iterator = this
    
    while (iterator !== null) {
        result.push(iterator.data)
        iterator = iterator.next
    }
    return result
}

LinkedList.build = function([...arr]) {
    if (arr.length) {
        const head = new LinkedList(arr[0])
        let iterator = head

        for (let i = 1; i < arr.length; iterator = iterator.next, i++) 
            iterator.next = new LinkedList(arr[i])
        
        return head
    }
}

LinkedList.traverse = function(head, callback) {
    let current = head

    while (current !== null) {
        callback(current.data)
        current = current.next
    }
}

LinkedList.reverse = function(head) {
    if (head === null)
        return head

    let prev = null, curr = head, next = head.next
    while (curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
