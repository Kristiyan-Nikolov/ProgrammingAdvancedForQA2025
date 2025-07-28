List<int> numbers = new List<int>() { 1, 2, 3, 4, -1, -5, 0, 50 };

//LINQ - съвкупност от методи, с които обработваме колекции

int min = numbers.Min(); //-5: най-малкия елемент в списъка

int max = numbers.Max(); //50: най-големия елемент в списъка

int sum = numbers.Sum(); //сума от елементите в списъка

double average = numbers.Average(); //средната стойност на елементите в списъка

numbers = numbers
            .Select(number => number * 2) //обработваме всеки един елемент в списъка
            .ToList();
//numbers = { 2, 4, 6, 8, -2, -10, 0, 100 }


List<int> values = new List<int>() { 3, 7, 8, 9, 4, 2, 10, 55 };
values = values
            .Where(number => number % 2 == 0) //филтрация
            .ToList();
//values = { 8, 4, 2, 10}

