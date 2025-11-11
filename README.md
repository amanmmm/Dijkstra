🛰️ Routing Simulator — Dijkstra’s Algorithm

A simple web-based simulator to demonstrate how Dijkstra’s shortest path algorithm builds a routing table in computer networks.

This project visualizes how routers compute the shortest path, next hop, and total cost to reach every other router in a network.

🧩 Features

✅ Interactive selection of source router
✅ Dynamic computation of routing table using Dijkstra’s algorithm
✅ Displays destination, next hop, cost, and full path
✅ Clean and responsive UI (HTML, CSS, JavaScript only)
✅ Beginner-friendly implementation — great for learning networking fundamentals

🧠 Algorithm Used

Dijkstra’s Algorithm

Finds the shortest path from a single source to all other nodes in a weighted graph.

Uses a priority queue (here, simulated with sorting).

Updates the least-cost path iteratively based on edge weights.

🗂️ Project Structure
Routing-Simulator/
│
├── index.html     # Main interface (UI layout)
├── style.css      # Styling and layout
└── script.js      # Core logic (graph + Dijkstra + table generation)

🚀 How to Run

Clone this repository:

git clone git@github.com:amanmmm/Dijkstra.git


Open the folder:

cd Dijkstra


Open index.html in any web browser.
That’s it — select a source router and click “Compute Routing Table” 🎯

📸 Example Output
Destination	Next Hop	Cost	Path
B	B	2	A → B
C	B	3	A → B → C
D	C	5	A → B → C → D
E	D	6	A → B → C → D → E
💡 Future Enhancements

Add visual graph visualization using D3.js or Canvas

Allow user-defined routers and link costs

Implement Bellman-Ford algorithm for comparison

Show step-by-step shortest path discovery

🧑‍💻 Author

Aman Ojha
🎓 Networking & Algorithms Enthusiast
