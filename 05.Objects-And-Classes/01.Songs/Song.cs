namespace Song_01
{
    //описваме с какво ще се характеризира и какви действия ще върши всяка една песен
    public class Song
    {
        //характеристики -> описваме в properties
        //плейлист, име, времетраене
        public string TypeList { get; set; }
        public string Name { get; set; }
        public string Time { get; set; }

        //конструктор
        //1. default конструктор -> създава празен обект от класа
        public Song()
        {
            //нов празен обект / песен
            //TypeList = null
            //Name = null 
            //Time = null
        }

        //2. custom конструктор -> създава обект, на който задаваме стойност на характеристиките
        public Song(string typeList, string name, string time)
        {
            //нов празен обект / песен
            //TypeList = null
            //Name = null 
            //Time = null
            TypeList = typeList;
            Name = name;
            Time = time;
        }
    }
}
