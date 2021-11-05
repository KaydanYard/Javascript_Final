class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(valueToRemove) {
    let currentNode = this.firstNode;
    let previousNode;
    
    let foundValue = valueToRemove === currentNode.value;
    while (!foundValue) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      
      if (!currentNode) {
        return this.listSize;
      }

      foundValue = valueToRemove === currentNode.value;
    }

    let nextNode = currentNode.next;

    if (currentNode === this.firstNode) {
      this.firstNode = nextNode;
      this.listSize -= 1;
    } else {
      previousNode.next = nextNode;
    }
  }

  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    
    if (!this.firstNode) {
      this.firstNode = nodeToInsert;
      this.listSize += 1;
    } else {
      let currentNode = this.firstNode;
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsert;
      this.listSize += 1;
    }
    
  }

  contains(value) {
    let currentNode = this.firstNode;
    while (currentNode != testNode5) {
      if (currentNode.value == value) {
        return true;
      }
      else { 
        currentNode = currentNode.next;
      }
    }
    return false;
  }
}