class Stack {

  constructor() {
    this.array = [];
    this.index = 0;
  }

  push(val) {
    this.array[this.index] = val;
    this.index++;
  }

  pop() {
    if (this.index === 0) {
      return null;
    }

    let poppedValue = this.array[--this.index]
    this.array.length = this.array.length-1;
    return poppedValue;
  }

  peek() {
    if (this.index == 0) {
      return null;
    } 
    else {
      let topElement = this.array[this.array.length-1];
      this.array[this.index-1];
      return topElement;
    }    
  }

  size() {
    let sizecounter = this.array.length;
    return sizecounter;
  }
}