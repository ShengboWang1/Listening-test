var rating = true
var clean = true

//control the path
var names = ["p232_001", "p232_002", "p232_007", "p232_009", "p232_010",
            "p232_012", "p232_013", "p232_014", "p232_017", "p232_020",
            "p232_025", "p232_027", "p232_028", "p232_029", "p232_030",
            "p232_031", "p232_032", "p232_033", "p232_034", "p232_035"];
var folders = ["Original1", "Original2", "Approach1", "Approach2", "Approach3", "Approach4"]

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



for (var i = 1; i < 21; i++){
    document.getElementById('label_' + String(i)).innerHTML = names[i-1];
}

for (var i = 1; i < 21; i++){
    for (var j = 1; j < 7; j++){
        document.getElementById('audio_' + String(i) + '_' + String(j)).src = "tracks/" + folders[j-1] + "/" + names[i-1] + ".wav";
    }
}

document.getElementById("line").style.visibility="hidden";
