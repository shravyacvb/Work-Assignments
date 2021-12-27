"use strict";

let posts = {};
let comments = {};
let previousId = -1;

const list = document.querySelector('.posts');

fetch('https://jsonplaceholder.typicode.com/posts')
.then( response => response.json())
.then(data => {
    posts = data;
    render();
});

function render() {
    list.innerHTML = posts.map(
        data => `<div class="post">
                    <li class="title">
                        <a data-id=${data.id} class="click-post" href="#">${data.title}</a>
                    </li>
                    <li class="body">${data.body}</li>
                    <ul id=${data.id} class="comments display"></ul>
                </div>`
    ).join(' ');
    
    const postList = document.querySelectorAll('a');
    
    for(let post of postList){
        post.addEventListener('click', (event) => fetchComments(event));
    }
    
}

function fetchComments(event){
    fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.dataset.id}/comments`)
        .then( response => response.json())
        .then(data => {
            comments = {};
            comments = data;
            renderComment(event.target.dataset.id);
        });
        
}

function renderComment(postId) {
    let commentsList = null;

    if (previousId != -1 && postId != previousId)
	{
		commentsList = document.getElementById(previousId);
		if(!commentsList.classList.contains('display')){
            commentsList.classList.add('display');
        } 
	}
	
	previousId = postId;

    commentsList = document.getElementById(postId);

    if(commentsList.classList.contains('display')){
        commentsList.classList.remove('display');
    } else {
        commentsList.classList.add('display');
    }

    commentsList.innerHTML = comments.map(
        data => `<div id=${data.postId} class="comment">
                    <li class="name">${data.name}</li>
                    <li class="email"><a href="#">${data.email}</a></li>
                    <li class="body">${data.body}</li>
                </div>`
    ).join(' ');
}

