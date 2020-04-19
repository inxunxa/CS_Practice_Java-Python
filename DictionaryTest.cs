using System;
using System.Linq;
using System.Collections.Generic;

namespace CsPractice
{
    class DictionaryTest
    {
        public void Run()
        {
            Console.WriteLine("e preciso estudar");

            var r = this.FirstNonRepeatedChar("This is a Test");
            Console.WriteLine(r);

            var s = this.FirstRepeatedChar("This is Test");
            Console.WriteLine(s);

            var h = this.SimpleHash("Some Test-A", 100);
            Console.WriteLine(h);
        }

        public char FirstNonRepeatedChar(string text)
        {
            Dictionary<char, int> map = new Dictionary<char, int>();

            foreach (char c in text)
            {
                if (map.ContainsKey(c))
                {
                    map[c] = ++map[c];
                }
                else
                {
                    map.Add(c, 1);
                }
            }

            foreach (char c in text)
            {
                if (map[c] == 1)
                {
                    return c;
                }
            }

            return '0';
        }

        public char FirstRepeatedChar(string text)
        {
            HashSet<char> charSet = new HashSet<char>();

            foreach (char c in text)
            {
                if (charSet.Contains(c))
                {
                    return c;
                }
                charSet.Add(c);
            }

            return '0';
        }

        int SimpleHash(string text, int size)
        {
            int sum = text.Sum(x => (int)x);
            return Convert.ToInt32(sum % size);
        }
    }
}