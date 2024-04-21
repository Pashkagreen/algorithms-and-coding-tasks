//  Дерево - рекурсивная структура данных, где каждый узел также является деревом, но для данного дерева каждый узел является поддеревом

const treeMock = [
    {
        value: 2,
        children: [
            {
                value: 2,
                children: [
                    {
                        value: 2, children: [
                            { value: 2, children: [] },
                            {
                                value: 2, children: [
                                    { value: 2, children: [] },
                                    {
                                        value: 2, children: [
                                            { value: 2, children: [] },
                                            { value: 2, children: [] },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 2, children: [
                            { value: 2, children: [] },
                            { value: 2, children: [] },
                        ],
                    },
                ],
            },
            {
                value: 2,
                children: [
                    { value: 2, children: [] },
                ],
            },
        ],
    },
];


const recursive = (tree) => {
    let total = 0;

    tree.forEach(node => {
        total += node.value;

        if (!node.children) {
            return node.value
        }

        total += recursive(node.children)
    })

    return total
}

const iterative = (tree) => {
    if (!tree.length) {
        return 0
    }

    let sum = 0;
    let stack = [];

    tree.forEach(node => stack.push(node));

    while (stack.length) {
        const node = stack.pop();
        sum += node.value;

        if (node.children) {
            node.children.forEach(child => stack.push(child))
        }
    }

    return sum
}

console.log(recursive(treeMock))
console.log(iterative(treeMock))
