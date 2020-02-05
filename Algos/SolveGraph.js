const graph = {
  a: ["b"],
  b: ["c", "d"],
  c: ["d"],
  d: []
};

// const doesPathExist = (graph, start, target, visited = {}) => {
//   if (!graph[start]) {
//     console.log(!graph[start]);
//     return false;
//   }
//   visited[start] = true;

//   return graph[start].some(vertex => {
//     if (vertex === target) return true;
//     if (!visited[vertex]) {
//       return doesPathExist(graph, vertex, target, visited);
//     } else {
//       return false;
//     }
//   });
// };

const doesPathExist = (graph, start, target, visited = {}) => {
  if (!graph[start]) {
    console.log(!graph[start]);
    return false;
  }
  visited[start] = true;

  return graph[start].some(vertex => {
    if (vertex === target) return true;
    if (!visited[vertex]) {
      return doesPathExist(graph, vertex, target, visited);
    } else {
      return false;
    }
  });
};

console.log(doesPathExist(graph, "a", "")); // true
doesPathExist(graph, "a", "d"); // true
doesPathExist(graph, "a", "a"); // false
