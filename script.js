let request = new XMLHttpRequest();
request.open("GET", "https://docs.dunglv202.tk/db.json");
request.onreadystatechange  = function(){
    if(this.readyState == 4){
        console.log(this.responseText);
    }
}
request.send();