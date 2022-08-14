const gifCollection = document.querySelector('#gif-collection');
function addGif(response) {
  let numResults = response.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    
    let newImage = document.createElement('img');
    newImage.setAttribute('src', response.data[randomIndex].images.original.url);
    newImage.classList.add("img-responsive");
    gifCollection.append(newImage);
    
  }
}
const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let searchGif = input.value;
    let searchItem = searchGif.toString();
    searchGif = '';
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchItem,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(res.data);
});

const removeGif = document.querySelector("#remove");
removeGif.addEventListener("click", function(){
    gifCollection.remove();
 
});


