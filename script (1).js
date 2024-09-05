
const cars = [
    {
        model: "malibu",
        mark: "gm",
        price: 22000,
        year: 2018,
        mileage: 64000,
        horsePower: 212
    },
    {
        model: "cobalt",
        mark: "gm",
        price: 11000,
        year: 2023,
        mileage: 4000,
        horsePower: 190
    },
    {
        model: "cls-63",
        mark: "mercedes-benz",
        price: 64000,
        year: 2010,
        mileage: 120000,
        horsePower: 450
    },
    {
        model: "competition",
        mark: "BMW",
        price: 120000,
        year: 2020,
        mileage: 20000,
        horsePower: 520
    },
    {
        model: "k5",
        mark: "kia",
        price: 32000,
        year: 2024,
        mileage: 1000,
        horsePower: 240
    }
]




// Найти самую быструю машину
// Найти самую молодую машину
// Найти самую изношенную машину

let fast = cars.reduce((a,b)=>{
    if (a.horsePower> b.horsePower) {
        return a
    } return b
})

let new_car =  cars.reduce((a,b)=>{
    if (a.year > b.year) {
        return a
    } return b
})
let old_car = cars.reduce((a,b)=>{
    if (a.mileage> b.mileage) {
        return a
    } return b
})


console.log(fast,new_car,old_car);



let from = prompt('ОТ') // 10,000
let up = prompt('ДО') // 24,000

let filtered = cars.filter(car => car.price >= from && car.price <= up)


const selectedModel = prompt('Вот список машин которые мы нашли \n ' + filtered.map(car => car.model + " " + car.mark) + "\n Выберите одно из этих машин написав название ниже").trim().toLowerCase()

const findedCar = cars.find(car => car.model.toLowerCase() === selectedModel)

const agreement = confirm(`
    Ваша машина: ${findedCar.mark} ${findedCar.model}
    Цена: ${findedCar.price}
    Лошадинная сила: ${findedCar.horsePower}

    Вы согласны купить эту машину?
`)


if(agreement === true) {
   let money = prompt("Введите деньги" ).trim().toLowerCase()
    if (money === findedCar.price) {
        alert("Вот ваша тачка")
    } else if (cash > findedCar.price) {
        
        let change = money - findedCar.price
        alert (`Держите вашу сдачу${change}`)
    }
} else if (maney < findedCar.price) {
    alert ("Это че? Где деньги?")
}






