function addTwoNumbers(l1, l2) {
    let carry = 0;
    let outList = {
        value: undefined,
        next: null,
    }
    while (l1 != null && l2 != null) {
        let sum = l1.value + l2.value + carry;
        if (sum > 9) {
            carry = Number(String(sum)[0]);
            sum = Number(String(sum)[1])
        } else {
            carry = 0;
        }
        insert(outList, sum)
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry) {
        insert(outList, carry);
    }

    return outList;

    function insert(list, num) {
        if (list.value === undefined) {
            list.value = num;
        } else if (!(list.next)) {
            list.next = {
                value: num,
                next: null,
            };
        } else {
            insert(list.next, num);
        }
    }
}
myList1 = {
    value: 5,
    next: {
        value: 4,
        next: {
            value: 3,
            next: null
        }
    }
};
myList2 = {
    value: 5,
    next: {
        value: 6,
        next: {
            value: 4,
            next: null
        }
    }
}

console.log(addTwoNumbers(myList1, myList2));