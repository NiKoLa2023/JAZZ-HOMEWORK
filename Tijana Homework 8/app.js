async function Getinfo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        let parsedObject = await response.json();
        parsedObject.filter(i => i.id == 1).forEach(e => console.log(e));
        parsedObject.filter(i => i.id == 1).map(y=>`${y.userId} ${y.id} ${y.title} ${y.icompleted}`).forEach(e => console.log(e));
        
    } catch (errorResponse) {
        console.log(errorResponse)
    }
}

Getinfo();

console.log("Hello")