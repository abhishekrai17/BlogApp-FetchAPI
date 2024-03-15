fetchDataposts();
//for posts
async function fetchDataposts() {

    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!resp.ok) {
            throw new Error('Failed to fetch....');
        }
        const data = await resp.json();
        displayDataposts(data);
    }
    catch (error) {
        console.log(error.message);
        document.getElementById('myContent').innerText = "Failed to Fetch the data.........";
    }
}
function displayDataposts(data) {

    const myData = document.getElementById('myContent');
    data.forEach(post => {
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <h4>Title : ${post.title}</h4>
        <p>Body : ${post.body}</p>
       
        <hr>
        `;
        myData.appendChild(myPost);
    });
}
fetchDatatodo();
//for todo
async function fetchDatatodo() {

    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!resp.ok) {
            throw new Error('Failed to fetch....');
        }
        const data = await resp.json();
        displayDatatodo(data);
    }
    catch (error) {
        console.log(error.message);
        document.getElementById('myContent').innerText = "Failed to Fetch the data.........";
    }
}




function displayDatatodo(data) {

    const myData = document.getElementById('todo');
    data.forEach(post => {
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        <h4>Title : ${post.title}</h4>
        <p>Status : ${post.completed}</p>
      
        <hr>
        `;
        myData.appendChild(myPost);
    });
}

