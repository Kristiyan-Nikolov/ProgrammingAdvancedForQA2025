//описваме характеристиките и действията за всеки един човек
public class Person
{
    //характеристики -> описват чрез properties
    //име, възраст, salary
    public string Name { get; set; }
    public int Age { get; set; }
    public double Salary { get; set; }

    //default конструктор -> специален метод, който създава нов празен обект от класа
    public Person()
    {
        //нов празен обект / човек
        //Name = null
        //Age = 0
        //Salary = 0.0
    }

    //custom конструктор -> специален метод, който създава обект от класа
    public Person(string name, int age, double salary)
    {
        //нов празен обект / човек
        //Name = null
        //Age = 0
        //Salary = 0.0
        Name = name;
        Age = age;
        Salary = salary; 
    }


    //действия -> описват чрез методи
    public void Sleep()
    {
        Console.WriteLine("I am sleeping");
    }

    public string Eat()
    {
        return "I am eating!";
    }
}


