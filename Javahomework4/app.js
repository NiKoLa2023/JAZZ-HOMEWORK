function introduce(userEntry, Age){
    if(userEntry=="dog"){
        let dogcalculation=Age/7;
        console.log(dogcalculation)
        return messageone
    }
    else if(userEntry=="human"){
        let humancalculation=7*Age;
        console.log(humancalculation)
        return messagetwo
    }
}
let first=prompt("Enter type of conversation")
let secon=prompt("Enter the age of the convertor")
let numbersecond=parseInt(secon)
introduce(first, numbersecond)