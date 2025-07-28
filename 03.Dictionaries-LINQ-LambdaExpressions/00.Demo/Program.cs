//ученик -> оценка
Dictionary<string, double> studentGrades = new Dictionary<string, double>(); //празен речник

//размер на речника = броя на записите вътре в него
Console.WriteLine(studentGrades.Count); //0

//добавяме записи
//начин 1: метод Add
studentGrades.Add("Aleks", 4.70);

Console.WriteLine(studentGrades.Count); //1

//начин 2: достъп на ключ
studentGrades["Boris"] = 5.30;

Console.WriteLine(studentGrades.Count); //2

//създаваме речник с предварително подготвени записи в него
Dictionary<string, int> fruits = new()
{
    { "Kiwi", 3 },
    { "Apple", 5 }
};

Console.WriteLine(fruits.Count); //2

//премахваме записи
studentGrades.Remove("Aleks");

Console.WriteLine(studentGrades.Count); //1

//премахваме всички записи
fruits.Clear();

Console.WriteLine(fruits.Count); //0

//проверка дали запис с даден ключ съществува в речника
bool isContaining = studentGrades.ContainsKey("Georgi"); //false
Console.WriteLine(studentGrades.ContainsKey("Georgi"));
if (studentGrades.ContainsKey("Georgi"))
{
    Console.WriteLine("Not containing");
}
Console.WriteLine(studentGrades.ContainsKey("Boris")); //true

//проверка дали запис с даден стойност / value съществува в речника
Console.WriteLine(studentGrades.ContainsValue(6.00)); //false
Console.WriteLine(studentGrades.ContainsValue(5.30)); //true

//!!! преди добавяне на запис да направим проверка дали вече няма запис с такъв ключ !!!
if (!studentGrades.ContainsKey("Boris"))
{
    studentGrades.Add("Boris", 5.60);
}

//достъпваме стойност / value запис -> чрез ключа
double grade = studentGrades["Boris"];
Console.WriteLine(studentGrades["Boris"]); //double 5.30

//ВИДОВЕ РЕЧНИЦИ
//1. Обикновен речник -> Dictionary -> записите се нареждат спрямо реда на добавяне
//2. Сортиран речник -> SortedDictionary -> записите се нареждат спрямо ключа в нарастващ ред
Dictionary<string, double> students = new Dictionary<string, double>();
students.Add("Boris", 5.30);
students.Add("Aleks", 3.70);
students.Add("Georgi", 5.90);

SortedDictionary<string, double> sortedStudents = new SortedDictionary<string, double>();
sortedStudents.Add("Boris", 5.30);
sortedStudents.Add("Aleks", 5.90);
sortedStudents.Add("Georgi", 3.70);

//обхождане на речник == обхождаме записите му
//запис == KeyValuePair
foreach (KeyValuePair<string, double> pair in sortedStudents)
{
    //какво искам да се изпълни за всеки един запис
    //всеки един запис се съхраянва в pair
    //pair.Key -> име на ученика
    //pair.Value -> оценка на ученика
    Console.WriteLine(pair.Key + " is with grade " + pair.Value);
}

