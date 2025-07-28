using System.Collections.Generic;
using System.Text;

namespace TestApp;

public class OddOccurrences
{
    public static string FindOdd(string[] input)
    {
        //input = ["HeLLo", "HELLO", "hello", "DESI", "desi", "IVAN"]

        Dictionary<string, int> oddWords = new();
        //oddWords (key: дума, value: колко пъти се среща думата в масива)
        foreach (string word in input)
        {
            string wordLower = word.ToLower(); //!!!!!!!!!!

            oddWords.TryAdd(wordLower, 0);
            oddWords[wordLower]++;
        }
        //oddWords
        //"hello" -> 3
        //"desi" -> 2
        //"ivan" -> 1

        StringBuilder sb = new();
        //sb: "hello ivan "
        foreach (KeyValuePair<string, int> word in oddWords)
        {
            if (word.Value % 2 != 0)
            {
                sb.Append($"{word.Key} ");
            }
        }

        return sb.ToString().Trim(); //"Hello Ivan"
    }
}
