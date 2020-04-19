using System;
using System.Collections.Generic;

namespace CsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            
            switch(args[0]){
                case "dictionary":
                    new DictionaryTest().Run();
                    break;
                case "binaryTree":
                    new Program().BinaryTree();
                    break;                    
            }
        }

        public void BinaryTree(){
            var tree = new BinaryTree();
            tree.Insert(7);
            tree.Insert(9);
            tree.Insert(4);
            tree.Insert(8);
            tree.Insert(10);
            tree.Insert(1);
            tree.Insert(5);
        }   
    }
}
