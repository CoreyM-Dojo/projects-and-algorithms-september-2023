class SLL {
    constructor() {
        this.head = null
        this.length = 0
    }

    remove(index=null) {

        
        let runner = this.head;
        if (index === 0) {
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            return this;
        }
        
        if (!index) {
            while (runner.next.next) {
                runner = runner.next
            }

            delete runner.next;
            runner.next = null;
            return this;
        }

        let i = 0;
        console.log(index);
        while (i < index-1) {
            console.log(runner)
            runner = runner.next
            i++;
        }

        // our runner should be the node before the node we are removing
        console.log("rn",runner.next)
        console.log("rnn", runner.next.next)
        let temp = runner.next
        runner.next = runner.next.next;
        delete temp.next
        return this;
    }

    addToBack(val) {
        const newNode = new ListNode(val)
        if (this.length === 0) {this.head = newNode; this.length++; return this}

        let runner = this.head;

        while (runner.next) {
            runner = runner.next;
        }

        runner.next = newNode 
        this.length++
    }

    addToFront(val){

        if (this.length === 0) {this.head = new ListNode(val); this.length++; return this}

        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;


    }

    insert(idx, val) {

        let i = 0;
        let prev = this.head;
        let runner = this.head;
        while (i < idx) {
            prev = runner;
            runner = runner.next;
            i++
        }
        prev.next = new ListNode(val)
        prev.next.next = runner
    }

    showList() {
        let runner = this.head;
        let resultString = ""
        while (runner) {
            resultString+=`(${runner.value}) -> `;
            runner = runner.next
        }
        resultString += null;
        console.log(resultString);
    }

    static fromArray(arr) {
        const sll = new SLL();
        for (let val of arr) {
            sll.addToBack(val)
        }

        return sll;
    }


}

class ListNode {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

// const sll = SLL.fromArray([-1,0,1,2,3,4,5]);
// sll.remove(0);
// sll.showList();

export {SLL, ListNode}

