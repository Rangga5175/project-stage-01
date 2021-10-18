let API = "https://api.thecatapi.com/v1/breeds"

const getKucing = async (API) => {
  const response = await fetch(API)
  const result = await response.json()

  console.log(result);

  const listKucing = document.querySelector(".list-koceng")
  result.forEach((item) => {
    console.log(item);
    listKucing.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${item.image.url} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>
    </div>
    `
  })
  
}
getKucing(API)