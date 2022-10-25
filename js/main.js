const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=20"  // DA RIMETTERE NULL!!!!!
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.getElementById('container');




function creaPost() {
    posts.forEach((obj) => {
        // Calcolo data in formato italiano
        let postDate = new Date(obj.created);
        let dd = String(postDate.getDate()).padStart(2, '0');
        let mm = String(postDate.getMonth() + 1).padStart(2, '0'); 
        let yyyy = postDate.getFullYear();
        postDate = dd + '/' + mm + '/' + yyyy;

        
        let postHTML = document.createElement('div');
        postHTML.classList.add('post');
        let postTemplate = `
        <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.author.image}" alt="${obj.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.author.name}</div>
                        <div class="post-meta__time">${postDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.content}</div>
            <div class="post__image">
                <img src="${obj.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${obj.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${obj.id}" class="js-likes-counter">${obj.likes}</b> persone
                    </div>
                </div> 
            </div>                    
        `;
        postHTML.innerHTML = postTemplate;
        container.appendChild(postHTML);
        
    }); 
}
creaPost();

let likeBtn =  document.querySelectorAll('.like-button');
let thumb = document.querySelectorAll('.like-button__icon');
let miPiace = document.querySelectorAll('.like-button__label');
let likesHTML = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < likeBtn.length; i++){
    let clicked = true;
    
    likeBtn[i].addEventListener('click', function() {
        if(clicked){
            thumb[i].classList.add('like-button--liked');
            miPiace[i].classList.add('like-button--liked');
            likesHTML[i].innerHTML = parseInt(likesHTML[i].innerHTML) + 1;
            clicked = false;
        } else {
            thumb[i].classList.remove('like-button--liked');
            miPiace[i].classList.remove('like-button--liked');
            likesHTML[i].innerHTML = parseInt(likesHTML[i].innerHTML) - 1;
            clicked = true;
        }
    })        
}













