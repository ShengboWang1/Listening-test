var rating = true
var clean = false

// show or hide the rating part
if (rating == true){
    for (var i = 1; i < 21; i++){
        for(var j = 1; j < 5; j++){
            document.getElementById(String(i)+"_"+String(j)).style.display='inline';
        }
    }
}
else if (rating == false){
    for (var i = 1; i < 21; i++){
        for(var j = 1; j < 5; j++){
            document.getElementById(String(i)+"_"+String(j)).style.display='none';
        }
    }
}

// show or hide the clean speech part
if (clean == true){
    for (var i = 0; i < 21; i++){ 
            document.getElementById("clean_"+String(i)).style.display='inline';
    }
}
else if (clean == false){
    for (var i = 0; i < 21; i++){ 
            document.getElementById("clean_"+String(i)).style.display='none';
    }
}

//control the path
var name =  "p232_001"
document.getElementById('label_1').innerHTML = name;

