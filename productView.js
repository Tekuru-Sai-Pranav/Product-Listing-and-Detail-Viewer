let displayProduct = document.getElementById("Displayproduct")
let productId = localStorage.getItem("productId")
let products = JSON.parse(localStorage.getItem("products")) 

let a = products.find(val => val.id == productId)

displayProduct.innerHTML = `
  <section>
    <div class="products">
      <div>
        <img src="${a.images[0]}" height="300" width="300" />
      </div>
      <div>
        <h1>${a.title}</h1><br>
        <p><b>Category:</b> ${a.category}</p><br>
        <p><b>Brand:</b> ${a.brand}</p><br>
        <p><b>Description:</b> ${a.description}</p><br>
        <p><b>Price: $${a.price}</b></p><br>
        <button class="cartButton">add to cart</button>
        <button class="backButton"><a href="home.html">back to home</a></button>
      </div>
    </div><br>
    <h2>Customer Reviews</h2><br><hr><br>
    <div>
      ${a.reviews.map(rating => `
        <p>${rating.comment}</p>
        <p>${'💗'.repeat(rating.rating)}${'🖤'.repeat(5 - rating.rating)}</p>
        <p>By ${rating.reviewerName} on ${new Date(rating.date).toLocaleDateString()}</p>
      `).join('')}
    </div>
  </section>
`
