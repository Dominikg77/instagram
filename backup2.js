let posts = [{
        "profilimage": "img/mclaren logo.jpg",
        "name": "McLaren GB",
        "3punkte": "img/3punkt.png",
        "image": "img/mclaren.jpg",
        "like": "img/herz.png",
        "kommentarimg": "img/kommentarblase.png",
        "flieger": "img/flieger.png",
        "save": "img/stecknadel.png",
        "anzahllikes": 92345,
        "benutzerkommentar": "McLaren 765Lt",
        "kommentarAuthor1": "Testnutzer",
        "kommentar1": "asas",
        "benutzername": [],
        "comments": []
    },
    {
        "profilimage": "img/ford-logo.png",
        "name": "Shelby USA",
        "3punkte": "img/3punkt.png",
        "image": "img/ford.png",
        "like": "img/herz.png",
        "kommentarimg": "img/kommentarblase.png",
        "flieger": "img/flieger.png",
        "save": "img/stecknadel.png",
        "anzahllikes": 32345,
        "benutzerkommentar": "Ford Mustang GT500 Shelby",
        "kommentarAuthor1": "Testnutzer",
        "kommentar1": "Blabla",
        "benutzername": [],
        "comments": []
    },
    {
        "profilimage": "img/merc-logo.jpg",
        "name": "Mercedes-AMG DE",
        "3punkte": "img/3punkt.png",
        "image": "img/merc.png",
        "like": "img/herz.png",
        "kommentarimg": "img/kommentarblase.png",
        "flieger": "img/flieger.png",
        "save": "img/stecknadel.png",
        "anzahllikes": 12345,
        "benutzerkommentar": "Mercedes S63 AMG Coupe",
        "kommentarAuthor1": "Testnutzer",
        "kommentar1": "LALA",
        "benutzername": [],
        "comments": []
    },
];

//noch nicht angefangen 
function render() {

    let content = document.getElementById(`post-container`);
    content.innerHTML = ``;
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += /*html*/ `
<div class="post">
    <div class="header-post"> 
        <div class="header-post-left" >
<img src="${post[`profilimage`]}"> 
<h3>${post[`name`]} </h3>
</div>
<img id="punkte" src="${post[`3punkte`]}"> 
</div>
<div class="post-main-img" >
<img src="${post[`image`]}"> 
</div>
<div class="post-second-container" >
<div class="post-second-left" >
<img src="${post[`like`]}"> 
<img src="${post[`kommentarimg`]}">
<img src="${post[`flieger`]}">
</div>
<img class="imgsave" src="${post[`save`]}"> 
</div>
<div class="likes" >
<p>Gefällt ${post[`anzahllikes`]} Mal </p>
</div>
<div class="benutzerkommentare-container">
    <div class="benutzerkommentare-inhalt" >
    <p> <b>${post[`name`]}:</b>${post[`benutzerkommentar`]}</p>
    <p> <b>${post[`kommentarAuthor1`]}:</b>${post[`kommentar1`]}</p>
</div>
<div id="kommentarehinzufügen${i}"></div>
</div>
<div class="newComments">
<input id="input2${i}" placeholder="Ihr Kommentar..." > 
<button onclick="addComment(${i})">Post</button>
</div>    

`;

let newcomments = document.getElementById(`kommentarehinzufügen${i}`);
for (let j = 0; j < post[`comments`].length; j++){
const comment = post[`comments`][j];
newcomments.innerHTML +=`
<div class="new-kommentar"> <b>Name:</b> ${comment}</div>
`
}

}
}
load();


function addComment(index){

let input2 = document.getElementById(`input2${index}`);

posts[index][`comments`].push(input2.value);
save();
render();
input1.value=``;


}



function save(){
let commentsAsText = JSON.stringify(posts[0].comments);

//
localStorage.setItem(`posts`, commentsAsText);

}


function load(){
let commentsAsText = localStorage.getItem(`posts`);

//
if (commentsAsText) {posts[0].comments=JSON.parse(commentsAsText);}

}




/* Kommentare richtig hinzufügen, speichern und laden*/
/* Funktionen auslagern, programme aufräumen, programm kommentieren und beschreiben*/
/* Desing und Schriftgrösen anpassen*/
/*Mehr Funktionen hinzufügen*/