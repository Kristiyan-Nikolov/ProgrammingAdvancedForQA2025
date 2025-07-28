
string partoToRemove = Console.ReadLine();
string text = Console.ReadLine();

//ice
//kicegiciceeb

while (text.Contains(partoToRemove))
{
    int startIndex = text.IndexOf(partoToRemove);
    int length = partoToRemove.Length;

    text = text.Remove(startIndex, length);
}

Console.WriteLine(text);
