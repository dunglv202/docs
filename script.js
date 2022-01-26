const mainSec = document.getElementById("main");
const createList = function(data){
    for (let i=0; i<data.length; i++) {
        let newSec = document.createElement("section");
        newSec.classList.add("sec");
        newSec.innerHTML = `
            <h1 class="sec-heading">${data[i].heading}</h1>
        `
        // create div grid-container and ul no-style list
        let container = document.createElement("div");
        container.classList.add("grid-container");

        let list = document.createElement("ul");
        list.classList.add("no-style", "list");

        // create list items
        let items = data[i].list;
        for (let j=0; j<items.length; j++) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-item");
            listItem.innerHTML = `
                <a class="hover-eff" href="${items[j].url}">
                    <span class="text">${items[j].title}</span>
                </a>
            `
            list.appendChild(listItem);
        }

        container.appendChild(list);
        newSec.appendChild(container);
        mainSec.appendChild(newSec);
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