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
        "kommentarAuthor1": "Vale",
        "kommentar1": "Was eine Rakete",
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
        "kommentarAuthor1": "Julia",
        "kommentar1": "Uii meine Lieblingsfarbe",
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
        "kommentarAuthor1": "Franco",
        "kommentar1": "V8 macht Krach in der Nacht",
        "benutzername": [],
        "comments": []
    },
];


function render() {
    load();
    //html inhalt weiter unten
    let content = document.getElementById(`post-container`);
    content.innerHTML = ``;
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += /*html*/ fullTemplate(i, post);

        //neue Kommentare hinzufügen
        let newcomments = document.getElementById(`kommentarehinzufügen${i}`);
        for (let j = 0; j < post[`comments`].length; j++) {
            const comment = post[`comments`][j];
            const name = post[`benutzername`][j];
            newcomments.innerHTML += `
<div class="new-kommentar"> <b>${name}:</b> ${comment}</div>
`
        }
    }
}


function fullTemplate(i, post) {
    return ` 
    <div class="post">
 ${headerTemplate(post)}
 ${imgTemplate(post)}
 ${secondTempalte(post)}
 ${likesTempaltes(i, post)}
 ${commentsTemplates(i)}
    </div>    
    `;
    //neue Kommentare hinzufügen
    let newcomments = document.getElementById(`kommentarehinzufügen${i}`);
    for (let j = 0; j < post[`comments`].length; j++) {
        const comment = post[`comments`][j];
        const name = post[`benutzername`][j];
        newcomments.innerHTML += `
    <div class="new-kommentar"> <b>${name}:</b> ${comment}</div>
    `
    }
};


//HTML Teampaltes 5 Funktionen
function headerTemplate(post) {
    return `
 <div class="header-post"> 
    <div class="header-post-left" >
    <img src="${post[`profilimage`]}"> 
    <h3>${post[`name`]} </h3>
    </div>
    <img id="punkte" src="${post[`3punkte`]}"> 
    </div>`
}


function imgTemplate(post){
    return `
    <div class="post-main-img" >
    <img src="${post[`image`]}"> 
    </div>`
    }

    function secondTempalte(post){
        return`  
    <div class="post-second-container" >
    <div class="post-second-left" >
    <img src="${post[`like`]}"> 
    <img src="${post[`kommentarimg`]}">
    <img src="${post[`flieger`]}">
    </div>
    <img class="imgsave" src="${post[`save`]}"> 
    </div>`
    }


    function likesTempaltes(i, post){
        return`
        <div class="likes" >
        <p> <b> Gefällt ${post[`anzahllikes`]} Mal </b></p>
        </div>
        <div class="benutzerkommentare-container">
        <div class="benutzerkommentare-inhalt" >
        <p> <b>${post[`name`]}:</b>${post[`benutzerkommentar`]}</p>
        <p> <b>${post[`kommentarAuthor1`]}:</b>${post[`kommentar1`]}</p>
        </div>
        <div id="kommentarehinzufügen${i}"></div>
        </div>`
    }


    function commentsTemplates(i){
        return`
        <div class="newComments">
        <input class="eins" id="input1${i}" placeholder="Ihr Name..." >
        <input id="input2${i}" placeholder="Ihr Kommentar..." > 
        <button onclick="addComment(${i})">Post</button>
        </div> 
        `
    }


//neue Kommentare hinzufügen
function addComment(index){
let input1 = document.getElementById(`input1${index}`);
let input2 = document.getElementById(`input2${index}`);
posts[index][`benutzername`].push(input1.value);
posts[index][`comments`].push(input2.value);
save();
render();
input1.value=``;
input2.value=``;
}


function filterNames(){
    let search = document.getElementById(`search`).value; 
search = search.toLowerCase(); // in klein Buchstaben wechseln 
console.log(search);


}


function save(){
let commentsAsText = JSON.stringify(posts);
localStorage.setItem(`posts`, commentsAsText);
}


function load(){
let commentsAsText = localStorage.getItem(`posts`);
if (commentsAsText) {posts=JSON.parse(commentsAsText);}
}