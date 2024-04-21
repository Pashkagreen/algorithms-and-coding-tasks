
// Элемент связного списка, хранит данные + ссылку на следующий элемент
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);

        this.size++;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    printList() {
        console.log(JSON.stringify(this));
    }

    getSize() {
        return this.size
    }
}

let list = new LinkedList();

list.add(1);
list.add(2);
list.add(4)

list.printList(); // Вывод: 1 2 4
list.getSize()
