public class BinaryTree {
    private Node root;

    public BinaryTree() { }

    public void Insert(int value){
        var node = new Node(value);
        if(root == null){
            root = node;
            return;
        }

        var childRoot = Lookup(value, this.root);
        if(value < childRoot.Value){
            childRoot.Left = node;
        }
        else{
            childRoot.Right = node;
        }
    }

    public bool Find(int value){
        var node = this.Lookup(value, this.root);
        return node != null && node.Value == value;
    }

    // find node containing value, or the parent that should contain it
    private Node Lookup(int value, Node root){                 
        if(value < root.Value && root.Left != null){
            return Lookup(value, root.Left);
        }
        
        if(value > root.Value && root.Right != null)
            return Lookup(value, root.Right);        

        return root;
    }
}