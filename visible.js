var rating = true
var clean = true

//control the path
var names = ["p232_001", "p232_002", "p232_007", "p232_009", "p232_010",
            "p232_012", "p232_013", "p232_014", "p232_017", "p232_020",
            "p232_025", "p232_027", "p232_028", "p232_029", "p232_030",
            "p232_031", "p232_032", "p232_033", "p232_034", "p232_035"];
// Approach 3 denotes the noisy tracks
var folders = ["Original1", "Original2", "Approach1", "Approach2", "Approach3", "Approach1"]

// shuffle key 20 rows 4 rolumns each row:[3, 4, 2, 5] for example and is shuffled
var keys = new Array(20);
for (var i = 0; i < 20; i++) {
    keys[i] = [2, 3, 4, 5];
    for (let r = 3; r > 0; r--) {
        let l = Math.floor(Math.random() * (r + 1));
        [keys[i][l], keys[i][r]] = [keys[i][r], keys[i][l]];
      }
}
console.log(keys)

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

// the name of the tracks of row 1
for (var i = 1; i < 21; i++){
    document.getElementById('label_' + String(i)).innerHTML = names[i-1];
}

// speech signals to each play button
for (var i = 1; i < 21; i++){
    for (var j = 1; j < 3; j++){
        document.getElementById('audio_' + String(i) + '_' + String(j)).src = "tracks/" + folders[j-1] + "/" + names[i-1] + ".wav";
    }
    for (var j = 3; j < 7; j++){
        document.getElementById('audio_' + String(i) + '_' + String(j)).src = "tracks/" + folders[keys[i-1][j-3]] + "/" + names[i-1] + ".wav";
    }
}


document.getElementById("line").style.visibility="hidden";

function sendEmail() {
    var e = document.getElementById("1_1").value;
    var items = new Array(20);
    for (var i = 0; i < 20; i++){
        items[i] = new Array(4);
        for (var j = 0; j < 4; j++){
            items[i][keys[i][j] - 2] = document.getElementById(String(i + 1) + "_" + String(j + 1)).value
        }
    } 
    console.log(items)
    alert("please wait...")
    Email.send({
    Host: "smtp.163.com",
    Username: "shengbo_wang2@163.com",
    Password: "DHXLGYGEWXZNIIGB",
    To: 'shengbo_wang2@163.com',
    From: "shengbo_wang2@163.com",
    Subject: "speech enhancement",
    Body: items + names + folders,
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}