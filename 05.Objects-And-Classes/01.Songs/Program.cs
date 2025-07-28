namespace Song_01
{
    public class Program
    {
        public static void Main(string[] args)
        {

            //Program.cs -> държим програмна логика
            //четене на данни от конзолата
            //принтираме данни на конзолата
            //създаваме обекти
            //пресмятания

            List<Song> songsList = new List<Song>(); //празен списък, в който мога да съхранявам само обекти от клас Song

            int countSongs = int.Parse(Console.ReadLine()); //броя на песните

            for (int count = 1; count <= countSongs; count++)
            {
                //какво ще изпълняваме за всяка една песен
                string data = Console.ReadLine();
                //"favourite_DownTown_3:14".Split("_") -> ["favourite", "DownTown", "3:14"]

                string typeList = data.Split("_")[0]; //"favourite" -> плейлиста
                string name = data.Split("_")[1]; //"DownTown" -> име на песента
                string time = data.Split("_")[2]; //"3:14" -> времетраене

                //нова песен от въведените данни
                Song song = new Song(typeList, name, time);

                //добавяме създадената песен в списъка с песни
                songsList.Add(song);
            }

            //обходили и записали всички песни -> songsList

            string typeSongToPrint = Console.ReadLine(); //плейлист или "all"

            foreach (Song song in songsList)
            {
                if (typeSongToPrint == "all" || typeSongToPrint == song.TypeList)
                {
                    Console.WriteLine(song.Name);
                }
            }
        }
    }
}