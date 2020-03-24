from MinHeap import Heap

items = [92,182,9382,1828,39,1828,283,12,43,12,54,12,12,7,34,1]

h = Heap()
for i in items:
    h.push(i)

print(h.peek())
h.pop()
print(h.peek())