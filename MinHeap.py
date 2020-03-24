#TODO: remove size
class Heap:
    items = []
    size = 0

    def get_left_child(self, index):
        return 2 * index + 1
    def get_right_child(self, index):
        return 2 * index + 2
    def get_parent_index(self, index):
        return (index -1) / 2
    
    def has_left_child(self, index):
        return self.get_left_child(index) < self.size
    def has_right_child(self, index):
        return self.get_right_child(index) < self.size
    def has_parent(self, index):
        return self.get_parent_index(index) >= 0

    def left_child(self, index):
        return self.items[self.get_left_child(index)]
    def right_child(self, index):
        return self.items[self.get_right_child(index)]
    def parent(self, index):
        return self.items[self.get_parent_index(index)]

    def swap(self, indexOne, indexTwo):
        self.items[indexOne], self.items[indexTwo] = self.items[indexTwo], self.items[indexOne]

    def peek(self):
        return self.items[0]

    def pop(self):
        item = self.items[0]
        self.items[0] = self.items[-1]
        self.size -= 1  
        self.heapifyDown()      
        return item
    
    def push(self, item):
        self.items.append(item)
        self.size += 1
        self.heapifyUp()

    def heapifyDown(self):
        index = 0
        while(self.has_left_child(index)):
            smallIndex = self.get_left_child(index)
            if(self.has_right_child(index) and self.right_child(index) < self.left_child(index)):
                smallIndex = self.get_right_child(index)
            
            if(self.items[index] < self.items[smallIndex]):
                break
            else:
                self.swap(index, smallIndex)
            index = smallIndex
    
    def heapifyUp(self):
        index = self.size -1
        while(self.has_parent(index) and self.parent(index) > self.items[index]):
            self.swap(self.get_parent_index(index), index)
            index = self.get_parent_index(index)