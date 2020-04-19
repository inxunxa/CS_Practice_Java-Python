
class ArrayQueue{
    data = [];
  
    push(item){
      this.data.push(item);
    }
  
    pop(){
      return this.data.shift();
    }
  }
  
  // in place construction of priority array/queue
  // will remove the largest number first
  class PriorityQueue{
    data = []
  
    push(item){
      let i = this.data.length - 1;
      while(i >= 0 && this.data[i] > item){
        this.data[i+1] = this.data[i];
        i--;
      }
      this.data[i+1] = item;
    }
  
    
    pop(){
      return this.data.pop()
    }
  }
  
  var p = new PriorityQueue();
  p.push(3)
  p.push(4)
  p.push(9)
  console.log(p.pop())
   p.push(1)
  
  console.log(p)
  