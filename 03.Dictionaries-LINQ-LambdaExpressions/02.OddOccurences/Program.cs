//входни данни -> масив от текстове
string[] words = Console.ReadLine() //"Java C# PHP PHP JAVA C java"
                  .Split(" ");      //["Java", "C#, "PHP", "PHP", "JAVA", "C", "java"]



//запис: дума -> бр. срещания
Dictionary<string, int> wordsCount = new Dictionary<string, int>();

foreach (string word in words)
{
    //правим думата изцяло с малки букви
    string wordWithLowerCase = word.ToLower();

    if (wordsCount.ContainsKey(wordWithLowerCase))
    {
        //вече сме срещали тази дума -> увеличаваме броя на срещанията с 1
        wordsCount[wordWithLowerCase]++;
    }
    else
    {
        //не сме срещали тази дума -> срещаме за първи път
        wordsCount.Add(wordWithLowerCase, 1);
    }
}


//wordsCount съхраняваме всяка една дума колко пъти се среща
foreach (string key in wordsCount.Keys)
{
    //key -> word
    int occurrences = wordsCount[key];
    if (occurrences % 2 != 0)
    {
        Console.Write(key + " ");
    }
}