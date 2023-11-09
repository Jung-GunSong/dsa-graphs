/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addNode(node) {
    this.nodes.add(node);
   }

  /** add array of new Node instances and adds to them to nodes property. */
  addNodes(nodeArray) {
    nodeArray.forEach( n => this.nodes.add(n));
  }

  /** add edge between nodes n1,n2 */
  addEdge(n1, n2) {
    n1.adjacent.add(n2);
    n2.adjacent.add(n1);
  }

  /** remove edge between nodes n1,n2 */
  removeEdge(n1, n2) {
    n1.adjacent.delete(n2);
    n2.adjacent.delete(n1);
   }

  /** remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) {
    for (let graphNode in this.nodes){
      graphNode.adjacent.delete(node);
    }
    this.nodes.delete(node);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    console.log(`our code ran`);
    let stack = [start];
    let visitedSet = new Set(stack);

    while (stack.length){
      let current = stack.pop();

      for (let adjNode of current.adjacent){
        if (!visitedSet.has(adjNode)){
          stack.push(adjNode);
          visitedSet.add(adjNode);
        }
      }
    }
    console.log(`we are about to return`);
      return Array.from(visitedSet);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {

  }

  /** find the distance of the shortest path from the start node to the end node */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
