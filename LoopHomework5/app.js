let arrayOfBroj = [1, 5, 10, 15, 30]

console.log(arrayOfBroj.length)
    
    function largestValuu(arrayOfBroj){
    let pomos = arrayOfBroj[0]
    let i = 0;
    while(i < arrayOfBroj.length){
        
        if(arrayOfBroj[i] < pomos[0]){
            
            pomos=(arrayOfBroj[i]);
        }
        i++
    }
    return pomos
}


let poraka1 = largestValuu(arrayOfBroj)
console.log(poraka1)



function largestValuue(arrayOfBroj){
    let pomos1 = ""
    let i = 0;
    while(i < arrayOfBroj.length){
        
        if(arrayOfBroj[i] > pomos1){
            
            pomos1=(arrayOfBroj[i]);
        }
        i++
    }
    return pomos1
}


let poraka = largestValuue(arrayOfBroj)
console.log(poraka)


let sum = poraka + poraka1
console.log(`Min ${poraka}, Max ${poraka1}, Sum`,sum)

   
    







