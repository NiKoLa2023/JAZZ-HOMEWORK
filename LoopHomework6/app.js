console.log("Connected")

let listNames = ["Matt", "Christian", "Leonardo"]
let lastNames = ["Damon", "Bale", "Dicaprio"]



function bestActors(first, second){
    
    fullNames = []
    console.log(fullNames)

    for(let i = 0; i < first.length; i++){
    fullNames.push((i+1),(first[i]),(second[i]))
    

    }
    console.log(fullNames)
}

   


bestActors(listNames, lastNames)