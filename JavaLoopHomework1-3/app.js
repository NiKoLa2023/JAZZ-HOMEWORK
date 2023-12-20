console.log("We are connected")

/********* Homework 1 **********/

let listText = ["Nikola", "excited", "hiking"]

function tellStory (listText){

    return `This is ${listText[0]}. ${listText[0]} is a nice person. Today they are ${listText[1]}. They are ${listText[2]} all day. The end`
}

let message = tellStory(listText)
console.log(message)

 
/********* Homework 2 **********/

let listNumbers = [10, 50, 100, 150, 200]

function sumFunction (arrays){


    return ((arrays[0]) + (arrays[1]) + (arrays[2]) + (arrays[3]) + (arrays[4]))
}

let sumofNumbers = sumFunction(listNumbers)
console.log(sumofNumbers)


/********* Homework 3 **********/


let words = ["Hello", "there", "students", "of", "SEDC", "!"];

function sentence (first) {
let message = ""
    for (let i = 0; i < first.length; i++){
    message = message + `${first[i]} `
    }
    return message
}



let finalMessage = sentence(words)
console.log(finalMessage)






    



