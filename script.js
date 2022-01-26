const mainSec = document.getElementById("main");
const createList = function(data){
    for (let i=0; i<data.length; i++) {
        let newSec = document.createElement("section");
        newSec.classList.add("sec");
        newSec.innerHTML = `
        
        `
    }
}

let request = new XMLHttpRequest();
request.open("GET", "https://docs.dunglv202.tk/db.json");
request.onreadystatechange  = function(){
    if(this.readyState == 4){
        console.log();
        createList(JSON.parse(this.responseText).data);
    }
}
request.send();