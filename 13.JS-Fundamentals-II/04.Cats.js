// 04.Cats - receives an array with key: value - > create class Cat > received from constructor the name and age > method meow should be created which will print "{cat name}, age {age} says Meow"
function catCatalog(array){
    let cats = []
    class Cat {
        constructor(name, age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let i = 0; i < array.length; i++){
        let catData = array[i].split(' ')
        let name, age
        [name, age] = [catData[0], catData[1]]
        cats.push(new Cat(name, age))
    }
    for (const element of cats) {
        element.meow()
        
    }

}
catCatalog(['Mellow 2', 'Tom 5'])