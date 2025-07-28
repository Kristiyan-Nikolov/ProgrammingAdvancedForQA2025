//входни данни -> списък с цели цисла
List<int> numbers = Console.ReadLine().Split().Select(int.Parse).ToList();

//число (int) -> бр. срещания (int)
SortedDictionary<int, int> countOccurences = new SortedDictionary<int, int>();

foreach(int number in numbers)
{
    //проверка дали това число вече е срещано
    if (countOccurences.ContainsKey(number))
    {
        //вече съм го срещала това число
        //увеличавам текущия брой на срещанията
        countOccurences[number]++;
    }
    else
    {
        //все още никога не съм срещала това число
        countOccurences.Add(number, 1);
    }
}

//запис: число (key) -> бр. срещания (value)
foreach(KeyValuePair<int, int> pair in countOccurences)
{
    //всеки един запис се съхранява в pair
    //pair.Key -> число
    //pair.Value -> бр. срещания
    Console.WriteLine(pair.Key + " -> " + pair.Value);
}
