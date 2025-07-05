let container = document.getElementById("container")
let displayDetails = ""
let products = []

function fetchData(){
  window.fetch("https://dummyjson.com/products")
  .then(val => val.json()).then(res => {
    products = res.products 
    localStorage.setItem("products", JSON.stringify(products))
    displayData(products)
  })
}

function displayData(val){
  displayDetails = ""
  val.map(val => {
    displayDetails += `
      <div class="container">
        <img src="${val.images[0]}" height="200" width="200" />
        <h2>${val.title.slice(0,15)}...</h2>
        <p class="price">Price : $${val.price}</p>
        <div class="price-container">
          <span class="rating">
            <span>${val.rating}</span>
            <span><i class="fa-solid fa-star"></i></span>
          </span>
          <button id="button" onclick="viewMore(${val.id})">view more</button>
        </div>
      </div>
    `
  })
  container.innerHTML = displayDetails
}

function viewMore(productId){
  localStorage.setItem("productId", productId)
  window.location.href = "productView.html"
}

function search(e){
  let searchItem = e.target.value.toLowerCase()
  let filteredItems = products.filter(val =>
    val.title.toLowerCase().includes(searchItem) ||
    val.category.toLowerCase().includes(searchItem)
  )
  displayData(filteredItems)
}

document.getElementById("searchItem").addEventListener("input", search)

fetchData()
