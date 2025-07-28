//описваме характеристиките и действията на всяко едно куче
public class Dog
{
    //характеристики -> описват чрез properties
    //име, порода, възраст
    public string Name { get; set; }
    public string Breed { get; set; }
    public int Age { get; set; }


    //действия -> описват чрез методи

    //метод, който описва действие, което ще извършва всеки обект не трябва да е static
    public void Bark()
    {
        Console.WriteLine("Woff");
    }
}


