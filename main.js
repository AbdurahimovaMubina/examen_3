const container = document.querySelector(".movie-section");

render(movies);

const search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  let searchInput = e.target.value.toLowerCase();
  const searchArray = movies.filter((item) =>
  item.Title.toLowerCase().includes(searchInput)  );

  render(searchArray.length ? searchArray : movies);
});

function render(array) {
  container.innerHTML = "";

  array.map((item) => {
    const card = document.createElement("div");
    card.classList.add("productes");

    const titles = document.createElement("h1");
    titles.textContent = item.Title;
    titles.classList.add("title")

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = 'img';
    img.classList.add("img")

    const category = document.createElement("p");
    category.textContent = item.Categories;
    category.classList.add("category")

      const qovun = document.createElement('div');
      const ball = document.createElement('span');
      const year = document.createElement('span');
      const time = document.createElement('span');

      ball.textContent = item.imdb_rating + '⭐'
      year.textContent = item.movie_year +' y'
      time.textContent = item.runtime
      category.textContent = item.Title + ' '

        qovun.classList.add('qovun')
      qovun.appendChild(ball)
      qovun.appendChild(year)
      qovun.appendChild(time)

    const button = document.createElement("button")
    button.textContent = ("more info")
    button.classList.add("btn-2")

    card.append(
      titles,
      img,
      qovun,
      category,
      button,
    );

    container.append(card);
  });
}

const sort = document.getElementById("sort");

sort.addEventListener("change", (e) => {
  let sortInput = e.target.value.toLowerCase();

  let data = [];
  if (sortInput === 'a-z') {
    data = movies.sort((a, b) => a.Title.localeCompare(b.Title)); // A-Z tartib
    console.log(data);
    render(data);
  } else if (sortInput === 'z-a') {
    data = movies.sort((a, b) => b.Title.localeCompare(a.Title)); // Z-A tartib
    console.log(data);
    
    render(data);  
  }
});


const category = document.querySelector('#category');

category.addEventListener('change', (e) => {
  let categoryInput = e.target.value;
  console.log(e.target.value.toLowerCase());
  
  let categoryFilter = movies.filter(
    item => item.Categories.toLowerCase().includes(categoryInput.toLowerCase()) 
  );
  render(categoryFilter)
})



