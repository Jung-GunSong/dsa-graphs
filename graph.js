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
    let queue = [start];
    let visitedSet = new Set(start.value);

    while (queue.length){
      let current = queue.shift();

      for (let adjNode of current.adjacent){
        if (!visitedSet.has(adjNode.value)){
          queue.push(adjNode);
          visitedSet.add(adjNode.value);
        }
      }
    }
    console.log(`we are about to return`);
    let array = Array.from(visitedSet);
    console.log(array);
      return Array.from(visitedSet);

  }

  /** find the distance of the shortest path from the start node to the end node */
  distanceOfShortestPath(start, end) {
    //begin count at 0
    //if start === end => return count
    //otherwise, BFS with start.adjacent
    //if (end in start.adjacent) => return count+1
    //else add neighbors to queue, add current to visistedSet, counter ++
    let counter = 0;
    let queue = [start];
    let visitedSet = new Set(queue);
    let found = false;

    while(queue.length){
      let current = queue.shift();

      if(current.value === end.value){
        return counter;
      }
      let oldLength = queue.length;
      console.log("current is: ", current);
      console.log('current.adjacent is: ', current.adjacent);
      for (let adjNode of current.adjacent){
        if (!visitedSet.has(adjNode)){
          queue.push(adjNode);
          visitedSet.add(adjNode);
        }
      }
      if (oldLength !== queue.length){
        counter++;
      }
    }

    return;


  }
}

module.exports = { Graph, Node }
