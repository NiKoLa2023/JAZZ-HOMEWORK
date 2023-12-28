

let array = [600, 500, 1000]

let paragraph = document.getElementById("paragraph");



function printing (array){

for (let i = 0; i < array.length; i++){ 

paragraph.innerHTML += `<li>${array[i]}</li>`
}

let final = sumofNumbers(array)

paragraph.innerHTML +=final
}


printing(array)


function sumofNumbers (aray){
let sum = 0
for (let i = 0; i < aray.length; i++){ 
    sum = sum + array[i]
}

return sum

}





