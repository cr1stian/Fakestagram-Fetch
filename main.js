var posts = document.querySelector("#posts");




fetch('https://my-json-server.typicode.com/cr1stian/fakestagram/posts', {
})
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
    display(data)
  })



function display(data) {
    var base = "";

  for(i=0; i<data.length; i++){
    let username = `${data[i].username}`;
    let img = `${data[i].img}`;
    let body = `${data[i].body}`;
    let date = `${data[i].date}`;
    let likes = `${data[i].likes}`;

    base += ` <div class="card" id="cards" style="width: 20rem;">
               <img class="card-img-top" id="image" src="${img}" alt="Card image cap">
               <div class="card-body">
               <p class="card-text font-weight-bold" id="bodyText">${likes} likes</p>
               <h5 id="bodyText">${username}</h5>
              <p class="card-text" id="bodyText">${body}</p>
              <p class="card-text font-italic" id="bodyText">${date}</p>
              </div>
              </div>`
console.log('Hello')
  };
  posts.insertAdjacentHTML('afterbegin', base);
}
