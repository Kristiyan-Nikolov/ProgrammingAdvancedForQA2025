List<int> numbers = new List<int>();
string[] input = Console.ReadLine().Split();
int sum = 0;

foreach (var inputItem in input)
{
	try
	{
		int number = int.Parse(inputItem);
		numbers.Add(number);
		sum += number;
	}
	catch (FormatException)
	{

		Console.WriteLine($"The element '{inputItem}' is in wrong format!");
	}
	catch (OverflowException)
	{
		Console.WriteLine($"The element '{inputItem}' is out of range!");
	}
	finally
	{
		Console.WriteLine($"Element '{inputItem}' processed - current sum: {sum}");


	}
}
Console.WriteLine($"The total sum of all integers is: {sum}");