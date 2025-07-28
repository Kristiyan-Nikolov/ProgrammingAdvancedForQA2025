namespace Students
{
    //описваме как ще изглежда и ще се държи всеки един студент
    public class Student
    {
        //характеристики -> описваме чрез properties
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Hometown { get; set; }

        //конструктори
        //1. default конструктор -> създава празен обект от класа
        public Student()
        {
            //нов празен обект / студент
            //FirstName = null
            //LastName = null
            //Age = 0
            //Hometown = null
        }

        //2. custom constructor -> създава обект от класа по специфични характеристики
        public Student(string firstName, string lastName, int age, string hometown)
        {

            //нов празен обект / студент
            //FirstName = null
            //LastName = null
            //Age = 0
            //Hometown = null
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Hometown = hometown;
        }
    }
}

