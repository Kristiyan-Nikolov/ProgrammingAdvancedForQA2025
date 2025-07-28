using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TestApp;

public class CountCharacters
{
    public static string Count(List<string> input)
    {
        //input = { "ab", "bc", "cd", "ad" };
        Dictionary<char, int> charCount = input.SelectMany(s => s)
            .GroupBy(c => c)
            .ToDictionary(g => g.Key, g => g.Count());
        //charCount (key: symbol -> value: count)
        //a -> 2
        //b -> 2
        //c -> 2
        //d -> 2
    
        StringBuilder sb = new();
        //sb: "a -> 2\nb -> 2\nc -> 2\nd -> 2"
        foreach (KeyValuePair<char, int> pair in charCount)
        {
            sb.AppendLine($"{pair.Key} -> {pair.Value}");
        }

        return sb.ToString().Trim();
    }
}
