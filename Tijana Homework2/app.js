let title = document.getElementById("title")
let alarm = document.getElementById("alarm")
let collores = document.getElementById("collores")
let description = document.getElementById("description")



function Reminder (title, priority, color, text){
    this.title = title
    this.priority = priority
    this.color = color
    this.text = text
}



let firstbutton = document.getElementById("firstbutton")
let secondbutton = document.getElementById("secondbutton")


let library = []

firstbutton.addEventListener("click", function(){
    let lista =  new Reminder(title.value, alarm.value, collores.value, description.value)
    library.push(lista)
})

let resultTable = document.getElementById("tableShow")

secondbutton.addEventListener("click", function(){


let lines = ""

for(let l of library){

lines = lines + `
<tr>
    <td>${l.title}</td>
    <td>${l.priority}</td>
    <td bgcolor = "${l.color}"></td>
    <td>${l.text}</td>
</tr>
`
}

resultTable.innerHTML = lines

   


})
