int countWords = int.Parse(Console.ReadLine());

//запис: дума(key) -> списък със синоними(value)
Dictionary<string, List<string>> wordSynonyms = new Dictionary<string, List<string>>();

for (int count = 1; count <= countWords; count++)
{
    string word = Console.ReadLine();
    string synonym = Console.ReadLine();

    if (!wordSynonyms.ContainsKey(word))
    {
        //думата я срещаме за първи път
        wordSynonyms.Add(word, new List<string>());
        wordSynonyms[word].Add(synonym);
    }
    else
    {
        //вече сме я срещали думата -> добавяме новия синоним към текущия списък със синоними
        wordSynonyms[word].Add(synonym);
    }
}

//запис: key (дума) -> value (списък със синоними)
foreach (KeyValuePair<string, List<string>> pair in wordSynonyms)
{
    //всеки един запис в pair
    //pair.Key -> дума (string)
    //pair.Value -> списък с синоними на дума (List<srting>)
    Console.WriteLine(pair.Key + " - " + string.Join(", ", pair.Value));
}