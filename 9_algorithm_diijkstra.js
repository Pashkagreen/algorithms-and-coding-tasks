// Поиск кратчайшего пути с учетом веса

const graph = {};

graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

const shortPath = (graph, start, end) => {
    // Веса
    const costs = {}

    // Обработанные ноды
    const processed = []

    // Соседние вершины рассматриваемой ноды
    let neighbors = {}

    // Вычисляем достижимость и вес
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 1000000
        }
    })
    console.log({costs})

    let node = findLowestCost(costs, processed)

    while (node) {
        const cost = costs[node];
        neighbors = graph[node];

        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })

        processed.push(node)
        node = findLowestCost(costs, processed)
    }

    return costs
}

const findLowestCost = (costs, processed) => {
  let lowestCost = 1000000
  let lowestNode;

  Object.keys(costs).forEach(node => {
      let cost = costs[node];
      // Если стоимость меньше и еще не обработана, то обновляем значение
      if (cost < lowestCost && !processed.includes(node)) {
          lowestNode = node;
          lowestCost = cost;
      }
  });

    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'))
