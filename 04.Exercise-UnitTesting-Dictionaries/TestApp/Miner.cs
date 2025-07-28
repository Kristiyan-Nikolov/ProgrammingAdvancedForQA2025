using System.Collections.Generic;
using System.Text;

namespace TestApp;

public class Miner
{
    public static string Mine(params string[] input)
    {
        //input = ["GOLD 2", "silver 5", "Gold 10", "SILVER 23", "Copper 12"]

        Dictionary<string, int> resources = new();
        //resources: key (ресурс) -> value (брой)

        foreach (string s in input)
        {
            //s = "gold 12".Split() -> ["gold", "12"]
            string[] split = s.Split();

            resources.TryAdd(split[0].ToLower(), 0);
            resources[split[0].ToLower()] += int.Parse(split[1]);
        }
        //resources
        //"gold" -> 12
        //"silver" -> 28
        //"copper" -> 12


        StringBuilder sb = new();
        //sb: "gold -> 12\nsilver -> 28\ncopper -> 12"
        foreach (KeyValuePair<string, int> pair in resources)
        {
            sb.AppendLine($"{pair.Key} -> {pair.Value}");
        }

        return sb.ToString().Trim();
    }
}
