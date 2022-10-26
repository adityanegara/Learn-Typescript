"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const noteListContainer = document.querySelector('ul');
let postList = [];
const fetchPostList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASE_URL}/posts`);
        postList = yield response.json();
    }
    catch (err) {
        throw (err);
    }
});
const renderPostList = (postList) => __awaiter(void 0, void 0, void 0, function* () {
    noteListContainer.innerHTML = '';
    postList.forEach(post => {
        noteListContainer.append(createPost(post));
    });
});
const createUnsaveButton = (post) => {
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Unsave';
    saveButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if ((yield unsavePost(post)) == true) {
            renderPostList(postList);
        }
    }));
    return saveButton;
};
const createSaveButton = (post) => {
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Save';
    saveButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if ((yield savePost(post)) == true) {
            renderPostList(postList);
        }
    }));
    return saveButton;
};
const unsavePost = (updatePost) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTitle = updatePost.title.replace('(SAVED)', '');
        yield fetch(`${BASE_URL}/posts/${updatePost.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: newTitle,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const savedPost = postList.map(post => {
            if (post.id == updatePost.id) {
                return Object.assign(Object.assign({}, post), { title: newTitle });
            }
            else {
                return post;
            }
        });
        postList = savedPost;
        return true;
    }
    catch (e) {
        throw (e);
    }
});
const savePost = (updatePost) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch(`${BASE_URL}/posts/${updatePost.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: `(SAVED)${updatePost.title}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const savedPost = postList.map(post => {
            if (post.id == updatePost.id) {
                return Object.assign(Object.assign({}, post), { title: `(SAVED)${updatePost.title}` });
            }
            else {
                return post;
            }
        });
        postList = savedPost;
        return true;
    }
    catch (e) {
        throw (e);
    }
});
const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
        const filteredPost = postList.filter((post) => {
            if (post.id !== postId) {
                return post;
            }
        });
        postList = filteredPost;
        return true;
    }
    catch (err) {
        throw (err);
    }
});
const createDeleteButton = (postId) => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-post__button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if ((yield deletePost(postId)) == true) {
            renderPostList(postList);
        }
    }));
    return deleteButton;
};
const isPostSaved = (post) => {
    if (post.title.indexOf('(SAVED)') > -1) {
        return true;
    }
    else {
        return false;
    }
};
const createPost = (newPost) => {
    const post = document.createElement('li');
    post.classList.add('post');
    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    const postTitle = document.createElement('p');
    postTitle.classList.add('post-title');
    postTitle.innerHTML = newPost.title;
    const postBody = document.createElement('p');
    postBody.classList.add('post-body');
    postBody.innerHTML = newPost.body;
    const postButtons = document.createElement('div');
    postButtons.classList.add('post-buttons');
    (isPostSaved(newPost) ?
        postButtons.append(createUnsaveButton(newPost)) :
        postButtons.append(createSaveButton(newPost)));
    postButtons.append(createDeleteButton(newPost.id));
    postContent.append(postTitle);
    postContent.append(postBody);
    post.append(postContent);
    post.append(postButtons);
    return post;
};
const firstRender = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fetchPostList();
        yield renderPostList(postList);
    }
    catch (e) {
        throw (e);
    }
});
firstRender();
