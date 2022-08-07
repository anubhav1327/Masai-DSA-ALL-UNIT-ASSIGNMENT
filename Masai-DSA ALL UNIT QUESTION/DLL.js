class DLLNode {
    constructor(val) {
        this.data = val

        this.next = null

        this.prev = null
    }
}

let head = null

function insert_at_beginning(val) {
    let new_node = new DLLNode(val)

    new_node.next = head

    if (head != null){
        head.prev = new_node
    }

    head = new_node

    return head
}

function insert_at_end(val) {
    let new_node = new DLLNode(val)

    if (head == null) {
        head = new_node
        return head
    } else {
        let cur = head

        while (cur.next != null) {
            cur = cur.next
        }

        cur.next = new_node
        new_node.prev = cur

        return head
    }
}

function insert_after_val(val, new_data) {
    let new_node = new DLLNode(new_data)

    let cur = head

    while (cur.data != val) {
        cur = cur.next
    }

    new_node.next = cur.next
    new_node.prev = cur

    if (cur.next != null) {
        cur.next.prev = new_node
    }

    cur.next = new_node

    return head
}

function insert_before_val(val, new_data) {
    let new_node = new DLLNode(new_data)

    let cur = head

    while (cur.data != val) {
        cur = cur.next
    }

    new_node.next = cur
    new_node.prev = cur.prev

    if (cur.prev != null) {
        cur.prev.next = new_node
    } else {
        head = new_node
    }

    cur.prev = new_node

    return head
}

function delete_beginning() {
    let temp = head
    head = head.next
    head.prev = null

    return temp
}

function delete_end() {
    if (head.next == null) {
        let temp = head
        head = null
        return temp
    } else {
        let cur = head
        while (cur.next != null) {
            cur = cur.next
        }

        let temp = cur
        cur.prev.next = null
        cur.prev = null

        return temp
    }
}

function delete_after_val(val) {
    let cur = head

    while (cur.data != val) {
        cur = cur.next
    }

    let temp = cur.next

    if (cur.next != null) {
        cur.next = cur.next.next
        cur.next.prev = cur
    } else {
        cur.next = null
    }

    return temp
}

function delete_before_val(val) {
    let cur = head

    while (cur.data != val) {
        cur = cur.next
    }

    let temp = cur.prev

    if (cur.prev != null) {
        cur.prev = cur.prev.prev
        cur.prev.next = cur
    } else {
        cur.prev = null
        head = cur
    }

    return temp
}