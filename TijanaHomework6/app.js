function products (name, category, discount, price){
    this.name = name
    this.category = category
    this.discount = discount
    this.price = price
}

// First Solution without input HTML

let array = [new products("Ananas", "Food", false, 500), new products("Banana", "Food", true, 50),new products("Potatoes", "Food", false, 10), new products("Juice", "Drinks", false, 5), new products("Coffee", "Drinks", true, 4), new products("Tea", "Drinks", true, 1),]

console.log(array)
//1.1 Soution
array.filter(p=>p.price > 20).map(m=>`${m.name} ${m.category} ${m.price}`).forEach(p=>console.log(p))
//1.2 Soution
array.filter(p=>p.price > 20).map(m=>console.log(`${m.name} ${m.category} ${m.price}`))
//2 Soution
array.filter(p=>p.category == "Food" && p.discount == true).map(m=>console.log(`${m.name}`))
//3 Soution
array.filter(p=>p.discount == true).map(m=>console.log(`${m.price}`))
//4 Soution
array.filter(p=>p.name.toLowerCase().charAt(0) == "a" || p.name.toLowerCase().charAt(0) == "e"|| p.name.toLowerCase().charAt(0) == "i"|| p.name.toLowerCase().charAt(0) == "o" || p.name.toLowerCase().charAt(0) == "u").filter(d=>d.discount == false).map(m=>console.log(`${m.name} ${m.price}`))

// Second Solution with input HTML

let title = document.getElementById("title")
let category = document.getElementById("category")
let discount = document.getElementById("discount")
let price = document.getElementById("price")

let callBtn = document.getElementById("callBtn")
let Fc1 = document.getElementById("Fc1")
let Fc2 = document.getElementById("Fc2")
let Fc3 = document.getElementById("Fc3")
let Fc4 = document.getElementById("Fc4")

let lista = []

callBtn.addEventListener("click", function(){
    lista.push(new products(title.value, category.value, discount.value, price.value)) 
    title.value = ""
    category.value = ""
    discount.value = ""
    price.value = ""
})

Fc1.addEventListener("click", function(){
    lista.filter(p=>p.price > 20).map(m=>console.log(`${m.name} ${m.category} ${m.price}`))
})

Fc2.addEventListener("click", function(){
    lista.filter(p=>p.category == "Food" && p.discount == true).map(m=>console.log(`${m.name}`))
})

Fc3.addEventListener("click", function(){
    lista.filter(p=>p.discount == true).map(m=>console.log(`${m.price}`))
})

Fc4.addEventListener("click", function(){
    lista.filter(p=>p.name.toLowerCase().charAt(0) == "a" || p.name.toLowerCase().charAt(0) == "e"|| p.name.toLowerCase().charAt(0) == "i"|| p.name.toLowerCase().charAt(0) == "o" || p.name.toLowerCase().charAt(0) == "u").filter(d=>d.discount == false).map(m=>console.log(`${m.name} ${m.price}`))
})




