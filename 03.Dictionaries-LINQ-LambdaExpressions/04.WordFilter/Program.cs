//входни данни -> масив от текстове

string[] words = Console.ReadLine() //"kiwi orange banana apple"
                 .Split()           //["kiwi", "orange", "banana", "apple"]
                 .Where(word => word.Length % 2 == 0) //["kiwi", "orange", "banana"]
                 .ToArray();

//words имаме само думи с четна дъжлина
//words = ["kiwi", "orange", "banana"]

foreach(string word in words)
{
    Console.WriteLine(word);
}
