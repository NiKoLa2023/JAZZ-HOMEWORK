

let callBtn = document.getElementById("callBtn")







callBtn.addEventListener("click", function(){
    fetch("https://swapi.dev/api/planets/?page=1")
    .then(function(response){
            response.json()
                            .then(function(data){
                                let placeholder = document.getElementById("result");
                                let entryData = "";

                                for(let dat of data){ 
                                    entryData = entryData + `
                                    <tr>
                                        <td>${dat.name}</td>
                                        <td>${dat.population}</td>
                                        <td>${dat.climate}</td>
                                        <td>${dat.gravity}</td>
                                    </tr>
                                    `;
                                }
                                placeholder.innerHTML = entryData;
                            
                                
                            })
                            .catch(function(erordata){})
    })
    
    .catch(function(nogooddata){
        console.log(nogooddata)
    })
    
    
    
    })
