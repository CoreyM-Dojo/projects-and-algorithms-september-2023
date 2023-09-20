class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    ADD(val, node = this.root) {
        const newNode = new BSTNode(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        // Check if the root is null -> break case
        if (!node) {
            node = newNode;
            return this
        } else {
            if (val < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.ADD(val, node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.ADD(val, node.right);
                }
            }
        }

        // Keep in mind you have to move throughout the entire
        // It will not work if you only check one side




    }
}

class BSTNode {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

const bst = new BinarySearchTree();

bst.ADD(10);
bst.ADD(5);
bst.ADD(8);
bst.ADD(20);
console.log(bst);