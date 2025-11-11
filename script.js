// Graph representation (Routers & Links with costs)
const graph = {
    'A': { 'B': 2, 'C': 5 },
    'B': { 'A': 2, 'C': 1, 'D': 4 },
    'C': { 'A': 5, 'B': 1, 'D': 2, 'E': 3 },
    'D': { 'B': 4, 'C': 2, 'E': 1 },
    'E': { 'C': 3, 'D': 1 }
  };
  
  // Populate router dropdown
  const startRouterSelect = document.getElementById("startRouter");
  Object.keys(graph).forEach(router => {
    let option = document.createElement("option");
    option.value = router;
    option.textContent = router;
    startRouterSelect.appendChild(option);
  });
  
  // Dijkstra’s Algorithm
  function dijkstra(graph, start) {
    let distances = {};
    let previous = {};
    let pq = [];
  
    Object.keys(graph).forEach(node => {
      distances[node] = Infinity;
      previous[node] = null;
    });
    distances[start] = 0;
  
    pq.push([0, start]);
  
    while (pq.length > 0) {
      pq.sort((a, b) => a[0] - b[0]);
      let [currentDistance, currentNode] = pq.shift();
  
      if (currentDistance > distances[currentNode]) continue;
  
      for (let neighbor in graph[currentNode]) {
        let distance = currentDistance + graph[currentNode][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentNode;
          pq.push([distance, neighbor]);
        }
      }
    }
  
    return { distances, previous };
  }
  
  // Build Routing Table
  function buildRoutingTable(graph, start) {
    let { distances, previous } = dijkstra(graph, start);
    let tableData = [];
  
    Object.keys(graph).forEach(destination => {
      if (destination === start) return;
  
      let path = [];
      let current = destination;
      while (current !== null) {
        path.unshift(current);
        current = previous[current];
      }
  
      tableData.push({
        destination,
        nextHop: path.length > 1 ? path[1] : "-",
        cost: distances[destination],
        path: path.join(" → ")
      });
    });
  
    return tableData;
  }
  
  // Display Table
  function computeRouting() {
    const start = startRouterSelect.value;
    const tableBody = document.querySelector("#routingTable tbody");
    tableBody.innerHTML = "";
  
    const routingTable = buildRoutingTable(graph, start);
  
    routingTable.forEach(row => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.destination}</td>
        <td>${row.nextHop}</td>
        <td>${row.cost}</td>
        <td>${row.path}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  