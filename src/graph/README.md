# Graph

A <b>Graph</b> is a non-linear data structure that consists <b>Vertices (Nodes)</b> and <b>Edges (Lines,Arcs)</b>. Edges connects Vertices so Graph is set of Vertices and Edges.

## Graph Terms:

- <b>Cycle:</b> When you start at Node(x), follow the links, and end back at Node(x). Min 3 nodes required.
- <b>Acyclic:</b> A graph that contains no cycles
- <b>Connected:</b> When every node has a path to another node.Fully connected.
- <b>Directed:</b> When there is a direction to the connections. You can go from A to B but B to A directly.
- <b>Undirected:</b> Not directed graph. You can go from A to B and vice versa.
- <b>Weighted:</b> The edges have a weight associated with them.
- <b>Dag:</b> Directed, acyclic graph.

## Big O

BigO is commonly stated in terms of V and E where V stands for vertices and E stands for edges. So <b>O(V \* E)</b> means that we will check every vertex, and on every vertex we check every edge.

## Graph Representation

Two most common ways to represent a graph is;

- <b>Adjacency Matrix:</b> Way of representing graph as a matrix of boolean (0’s and 1’s). If there are n vertices in the graph we create a 2D matrix <b>adjMat[n][n]</b> having dimension n x n. This representation has <b>Space Complexity</b> of <b>O(V<sup>2</sup>)</b>

  |                                                                                                                           |                                                                                                                       |
  | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
  | ![Undirected Graph](https://media.geeksforgeeks.org/wp-content/uploads/20230727130331/Undirected_to_Adjacency_matrix.png) | ![Directed Graph](https://media.geeksforgeeks.org/wp-content/uploads/20230727130528/Directed_to_Adjacency_matrix.png) |

- <b>Adjacency List:</b> An array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i.
  | | |
  | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
  | ![Undirected Graph](https://media.geeksforgeeks.org/wp-content/uploads/20230727154843/Graph-Representation-of-Undirected-graph-to-Adjacency-List.png) | ![Directed Graph](https://media.geeksforgeeks.org/wp-content/uploads/20230727155209/Graph-Representation-of-Directed-graph-to-Adjacency-List.png) |

  [Img Sources](https://www.geeksforgeeks.org/graph-and-its-representations/)
