class HashTable{
    size = 0;
    data = [];
  
    constructor(size = 4){
      this.size = size;
    }
  
    _hash = (key, size) => {
        let hash =0;
        for(let i=0; i<key.length; i++){
          hash += key.charCodeAt(i);        
        }
  
        return hash % this.size;
    }
  
    insert = (key, value) => {
      const index = this._hash(key);
      
      if(this.data[index] === undefined){
        this.data[index] = [
          [key, value]
        ];
      } 
      else {
        var found = false;
        for(let i =0; i< this.data[index].length; i++){
          if(this.data[index][i] && this.data[index][i][0] === key){
            // update
            this.data[index][i][1] = value;
            found = true;
            break;
          }
        }
  
        if(!found){
          // add to the index
          this.data[index].push([key, value]);
        }
      }
    }
  
    lookup = (key) => {
      let index = this._hash(key);    
  
      if(this.data[index] === undefined){
        return undefined;
      }
  
      for(let i=0; i < this.data[index].length; i++){
        if(this.data[index][i] && this.data[index][i][0] === key){
          return this.data[index][i][1];        
        }
      }
    }
  
    delete = (key) => {
      let index = this._hash(key);
      if(this.data[index].length === 1){
        this.data[index] = undefined;
        return true;
      }   
  
      for(let i=0; i< this.data[index].length; i++){
        if(this.data[index][i][0] === key){
          this.data[index][i] = undefined;
          return true;
        }
      }
      
      return false;
    }
  
    print = () => {
      console.log(this.data);
    }
  
  }
  
  var h = new HashTable();
  h.insert('hello', 'world');
  h.insert('test','value');
  h.insert('qwewe','two');
  h.insert('123','three');
  h.insert('zxc','four');
  
  console.log(h.lookup('test'));
  console.log(h.lookup('zxc'));
  
  h.print();
  h.delete('123')
  h.print();
  console.log(h.lookup('123'));
  
  h.insert('123','three');
  console.log(h.lookup('123'));
  h.print();
  