
int number = int.Parse(Console.ReadLine());
double root = 0;
try
{
	if (number < 0) throw new ArgumentException("Invalid number.");
	else
	{
		root = Math.Sqrt(number);
		Console.WriteLine(root);
	}
}
catch (ArgumentException ex)
{

	Console.WriteLine(ex.Message);

}
finally
{
	Console.WriteLine("Goodbye.");
}
