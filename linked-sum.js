//iterate trhough the linked list
function listNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    debugger;
    let rest = 0;
    let outList = {
        val: null,
        next: null
    }
    console.log(outList);
    while (l1 != null && l2 != null) {
        let sum = l1.val + l2.val + rest;
        if (String(sum).length > 1) {
            rest = parseInt(String(sum)[0]);
            sum = parseInt(String(sum)[1]);

        } else {
            rest = 0;
        }
        insert(outList, sum);
    }
    insert(outList, rest);

    function insert(list, value) {
        debugger;
        if (list.val === null) {
            list.val = value;
        } else if (list.next === null) {
            list.next = new listNode(value);
        } else {
            insert(list.next, value);
        }
    }

    return outList;
};

let list1 = {
    val: 7,
    next: {
        val: 5,
        next: null
    }
}
let list2 = {
    val: 9,
    next: {
        val: 7,
        next: null
    }
}
function insert(list, value) {
    debugger;
    if (list.val === null) {
        list.val = value;
    } else if (list.next === null) {
        list.next = new listNode(value);
    } else {
        insert(list.next, value);
    }
}

// console.log(addTwoNumbers(list1, list2));
// let node = new listNode(5);
// console.log(node);
insert(list2, 5);