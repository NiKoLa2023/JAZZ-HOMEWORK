let userInfo=prompt("Please enter yor birthdat year")
let userinfoNumber=parseInt(userInfo)
let userinfoNumberOne=((userinfoNumber-4)%12)


if(userinfoNumberOne==0){console.log("Rat")}
else if(userinfoNumberOne==1){console.log("Ox")}
else if(userinfoNumberOne==2){console.log("Tiger")}
else if(userinfoNumberOne==3){console.log("Rabbit")}
else if(userinfoNumberOne==4){console.log("Dragon")}
else if(userinfoNumberOne==5){console.log("Snake")}
else if(userinfoNumberOne==6){console.log("Horse")}
else if(userinfoNumberOne==7){console.log("Goat")}
else if(userinfoNumberOne==8){console.log("Monkey")}
else if(userinfoNumberOne==9){console.log("Rooster")}
else if(userinfoNumberOne==10){console.log("Dog")}
else{console.log("Pig")}
