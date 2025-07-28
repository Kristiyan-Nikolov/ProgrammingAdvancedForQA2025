
using System.Text.RegularExpressions;

string pattern = "[A-Z][a-z]+ [A-Z][a-z]+";

string input = Console.ReadLine();

Regex regex = new Regex(pattern);

MatchCollection collection = Regex.Matches(input, pattern);

foreach (var item in collection)
{
    Console.WriteLine(item);
}
