// const url = "http://www.omdbapi.com/?apikey=17f8307a&t=${searchValue}";

let searchBtn = document.querySelector("#searchBtn");
let searchInput = document.querySelector("#searchInput");

const getResult = async function (searchValue) {
  document.querySelector(".text").innerHTML = "";

  let data = await fetch(
    `http://www.omdbapi.com/?apikey=17f8307a&t=${searchValue}`
  );
  let response = await data.json();
  // console.log(response);

  let div = document.createElement("div");
  div.classList.add("detail");
  div.innerHTML = `
    <img src=${response.Poster} alt="Sorry, there is no image"></img>
    <br><br>
    <h2>Movie Name : <span>${response.Title}</span></h2>
    <p>Release Date : <span>${response.Released}</span></p>
    <p>Director Name : <span>${response.Director}</span></p>
    <p>Actor Name : <span>${response.Actors}</span></p>
    <p>Genre : <span>${response.Genre}</span></p>
    <p>Rating : <span>${response.imdbRating}</span></p>
    `;
  document.querySelector(".text").appendChild(div);
};

searchBtn.addEventListener("click", function () {
  let searchValue = searchInput.value;
  if (searchValue == "") {
    alert("Please Enter the Movie Name");
  } else {
    getResult(searchValue);
  }
});

// const url = "http://www.omdbapi.com/?apikey=17f8307a&t=pk";

// const get = async function(){
//     let data = await fetch(url);
//     let response = await data.json();
//     console.log(response);
// }
// get();
