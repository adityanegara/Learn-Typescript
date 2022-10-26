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
const fetchPostList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASE_URL}/posts`);
        const postList = yield response.json();
        return postList;
    }
    catch (err) {
        throw (err);
    }
});
const renderPostList = () => __awaiter(void 0, void 0, void 0, function* () {
    const postList = yield fetchPostList();
    postList.forEach(post => {
        noteListContainer.append(createPost(post));
    });
});
const createSaveButton = (post) => {
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Save';
    saveButton.addEventListener('click', () => {
        console.log(`saving ${post.id}`);
    });
    return saveButton;
};
const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('deleting post');
        yield fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
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
        yield deletePost(postId);
        renderPostList();
    }));
    return deleteButton;
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
    postButtons.append(createSaveButton(newPost));
    postButtons.append(createDeleteButton(newPost.id));
    postContent.append(postTitle);
    postContent.append(postBody);
    post.append(postContent);
    post.append(postButtons);
    return post;
};
renderPostList();
