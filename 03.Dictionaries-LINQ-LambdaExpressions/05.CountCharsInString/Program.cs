//входни данни -> текст
string text = Console.ReadLine();

//символ -> бр. срещания
Dictionary<char, int> countSymbols = new Dictionary<char, int>();


foreach(char symbol in text)
{
    if (symbol == ' ')
    {
        continue;
        //пропускаме кода до края на цикъла
        //преминаваме към следващия символ
    }

    if (countSymbols.ContainsKey(symbol))
    {
        //вече сме го срещали този символ и сме си записали някакъв брой за него
        //увелича текущия брой на срещанията с 1
        countSymbols[symbol]++;
    }
    else
    {
        //не сме я срещали до момента
        countSymbols.Add(symbol, 1);
    }
}

//запис: символ (char) -> бр. срещания (int)
foreach (KeyValuePair<char, int> pair in countSymbols)
{
    //всеки един запис се съхранява в pair
    //pair.Key -> символ
    //pair.Value -> бр. срещания
    Console.WriteLine(pair.Key + " -> " + pair.Value);
}