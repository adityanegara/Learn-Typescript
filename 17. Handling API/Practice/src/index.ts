interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const noteListContainer = document.querySelector('ul') as HTMLUListElement;
const postTitleInput = document.getElementById('create-form__title') as HTMLInputElement;
const postBodyInput = document.getElementById('create-form__body') as HTMLTextAreaElement;
const submitPostButton = document.getElementById('create-form__button') as HTMLButtonElement;


submitPostButton.addEventListener('submit', (e)=>{
    e.preventDefault();
})

let postList: Post[] = [];


const fetchPostList = async ():Promise<void> =>
{
    try
    {
        const response = await fetch(`${BASE_URL}/posts`);
        postList = await response.json();
    }
    catch(err)
    {
        throw(err);
    }
}

const renderPostList = async (postList: Post[]):Promise<void> =>
{
    noteListContainer.innerHTML = '';
    postList.forEach(post => {
        noteListContainer.append(createPost(post));
    });
}

const createUnsaveButton = (post: Post):HTMLButtonElement =>{
    const saveButton:HTMLButtonElement = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Unsave';
    saveButton.addEventListener('click', async () =>{
        if(await unsavePost(post) == true){
            renderPostList(postList);
        }
    })
    return saveButton;
} 


const createSaveButton = (post: Post):HTMLButtonElement =>{
    const saveButton:HTMLButtonElement = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Save';
    saveButton.addEventListener('click', async () =>{
        if(await savePost(post) == true){
            renderPostList(postList);
        }
    })
    return saveButton;
} 


const unsavePost = async (updatePost: Post):Promise<boolean> =>{
    try
    {
        const newTitle = updatePost.title.replace('(SAVED)', '');
        await fetch(`${BASE_URL}/posts/${updatePost.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: newTitle,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const savedPost = postList.map(post =>{
            if(post.id == updatePost.id){
                return {...post,  title: newTitle}
            }else{
                return post;
            }
        })
        postList = savedPost;
        return true;
    }catch(e){
        throw(e);
    }
}


const savePost = async (updatePost: Post):Promise<boolean> =>{
    try
    {
        await fetch(`${BASE_URL}/posts/${updatePost.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: `(SAVED)${updatePost.title}`,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const savedPost = postList.map(post =>{
            if(post.id == updatePost.id){
                return {...post,  title: `(SAVED)${updatePost.title}`}
            }else{
                return post;
            }
        })
        postList = savedPost;
        return true;
    }catch(e){
        throw(e);
    }
}

const deletePost = async (postId:number):Promise<boolean> =>{
    try
    {
        await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
        const filteredPost = postList.filter((post) =>{
            if(post.id !== postId){return post}
        })
        postList = filteredPost;
        return true;
    }
    catch(err)
    {
        throw(err);
    }
}

const createDeleteButton = (postId: number):HTMLButtonElement =>{
    const deleteButton:HTMLButtonElement = document.createElement('button');
    deleteButton.classList.add('delete-post__button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', async () =>{
      if(await deletePost(postId) == true){
        renderPostList(postList);
      }
    })
    return deleteButton;
}

const isPostSaved = (post: Post):boolean =>{
    if (post.title.indexOf('(SAVED)') > -1) {
    return true;
    } else {
    return false;
    }
}

const createPost = (newPost: Post):HTMLElement =>{
    const post:HTMLLIElement = document.createElement('li');
    post.classList.add('post');
    const postContent:HTMLDivElement = document.createElement('div');
    postContent.classList.add('post-content');
    const postTitle:HTMLParagraphElement = document.createElement('p');
    postTitle.classList.add('post-title');
    postTitle.innerHTML = newPost.title;
    const postBody:HTMLParagraphElement = document.createElement('p');
    postBody.classList.add('post-body');
    postBody.innerHTML = newPost.body;
    const postButtons:HTMLDivElement = document.createElement('div');
    postButtons.classList.add('post-buttons');
    (isPostSaved(newPost) ? 
        postButtons.append(createUnsaveButton(newPost)) :  
        postButtons.append(createSaveButton(newPost)))
   ;

    postButtons.append(createDeleteButton(newPost.id));

    postContent.append(postTitle);
    postContent.append(postBody);
    post.append(postContent);
    post.append(postButtons);
    return post;
} 

const firstRender = async():Promise<void> =>{
    try{
        await fetchPostList();
        await renderPostList(postList);
    }
    catch(e){
        throw(e);
    }
}

firstRender();