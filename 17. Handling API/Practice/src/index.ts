interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const noteListContainer = document.querySelector('ul') as HTMLUListElement;

const fetchPostList = async ():Promise<Post[]> =>
{
    try
    {
        const response = await fetch(`${BASE_URL}/posts`);
        const postList: Post[] = await response.json();
        return postList;
    }
    catch(err)
    {
        throw(err);
    }
}

const renderPostList = async ():Promise<void> =>
{
    const postList = await fetchPostList();
    postList.forEach(post => {
        noteListContainer.append(createPost(post));
    });
}

const createSaveButton = (post: Post):HTMLButtonElement =>{
    const saveButton:HTMLButtonElement = document.createElement('button');
    saveButton.classList.add('save-post__button');
    saveButton.innerHTML = 'Save';
    saveButton.addEventListener('click', () =>{
        console.log(`saving ${post.id}`);
    })
    return saveButton;
} 

const deletePost = async (postId:number):Promise<boolean> =>{
    try
    {
        await fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'DELETE',
        });
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
        await deletePost(postId);
        renderPostList();
    })
    return deleteButton;
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
    postButtons.append(createSaveButton(newPost));
    postButtons.append(createDeleteButton(newPost.id));

    postContent.append(postTitle);
    postContent.append(postBody);
    post.append(postContent);
    post.append(postButtons);
    return post;
} 

renderPostList();