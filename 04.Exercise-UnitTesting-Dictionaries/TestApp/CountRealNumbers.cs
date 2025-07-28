using System.Collections.Generic;
using System.Text;

namespace TestApp;

public class CountRealNumbers
{
    public static string Count(int[] nums)
    {
        //nums = [ 0, 0, 0, 0 ]
        SortedDictionary<int, int> count = new();

        foreach (int num in nums)
        {
            count.TryAdd(num, 0);
            count[num]++;
        }
        //count (key: число -> value: бр. срещания)
        //0 -> 4

        StringBuilder sb = new();
        foreach (KeyValuePair<int, int> pair in count)
        {
            sb.AppendLine($"{pair.Key} -> {pair.Value}");
        }

        return sb.ToString().Trim();
    }
}
