/*
██ ███    ██      ██ ███████  ██████ ████████ ██  ██████  ███    ██ 
██ ████   ██      ██ ██      ██         ██    ██ ██    ██ ████   ██ 
██ ██ ██  ██      ██ █████   ██         ██    ██ ██    ██ ██ ██  ██ 
██ ██  ██ ██ ██   ██ ██      ██         ██    ██ ██    ██ ██  ██ ██ 
██ ██   ████  █████  ███████  ██████    ██    ██  ██████  ██   ████
*/
//Contains all scripts used to inject HTML into product pages.

//Takes the dinoArray and a dinoName, and generates a product page by calling all the other render functions.
function injectElements(dinoArray, dinoName) {
  let dinosaur = dinoArray.filter((dino) => {
    return dino.productName === dinoName;
  })[0];

  render(dinosaur);
}

//This method accepts a dinosaur object and deconstructs it to inject it in all the right places.
function render(dinosaur) {
  injectTitle(dinosaur.productName);
  injectNavBar();
  injectCarousel(dinosaur.imageName1, dinosaur.imageName2, dinosaur.imageName3);
  injectProductName(dinosaur.productName, dinosaur.latinName);
  injectProductInfo(
    dinosaur.description,
    dinosaur.manufacturer,
    dinosaur.era,
    dinosaur.dna,
    dinosaur.diet,
    dinosaur.size,
    dinosaur.length,
    dinosaur.height,
    dinosaur.weight,
    dinosaur.difficulty,
    dinosaur.price
  );
}

//Injects a title into the page.
function injectTitle(name) {
  document.getElementById("pageTitle").innerHTML = name;
}

//Renders a counter for the cart if there are any items in it.
function injectCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart === null) {
    return;
  }
  itemCount = cart.length;
  if (itemCount > 0) {
    document.getElementById(
      "cartCounter"
    ).innerHTML = `<span id="cartCount" class="badge badge-info">${itemCount}</span>`;
  }
}

//Injects the NavBar into a certain div element on a page.
function injectNavBar() {
  document.getElementById(
    "injectNavBar"
  ).innerHTML = 
  `<nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="../index.html"><i class="fas fa-dna"></i> DinoStore</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html"><i class="fas fa-home"></i> Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-dollar-sign"></i> Buy Dinosaurs
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="prodDisplay.html?productKey=productName&productValue=.">
                      All Dinosaurs</a>
                      <div class="dropdown-divider"></div>
                      <h6 class="dropdown-header"><i class="fas fa-weight-hanging"></i> Size</h6>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=size&productValue=Small">Small</a>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=size&productValue=Medium">Medium</a>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=size&productValue=Large">Large</a>
                      <div class="dropdown-divider"></div>
                      <h6 class="dropdown-header"><i class="fas fa-drumstick-bite"></i> Diet</h6>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=diet&productValue=Carnivore">
                      Carnivores</a>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=diet&productValue=Herbivore">
                      Herbivores</a>
                      <div class="dropdown-divider"></div>
                      <h6 class="dropdown-header"><i class="fas fa-industry"></i> Manufacturer</h6>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=manufacturer&productValue=InGen">InGen</a>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=manufacturer&productValue=Biosyn">Biosyn</a>
                      <a class="dropdown-item" href="prodDisplay.html?productKey=manufacturer&productValue=Regenesis">Regenesis</a>
                  </div>
                  </li>
                  </ul>
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item ml-auto">
                    <a class="nav-link" href="../register.html">
                    <i class="fas fa-sign-in-alt"></i> Login</a>
                  </li>
                  <li class="nav-item ml-auto">
                    <a class="nav-link" href="../cart.html">
                    <i class="fas fa-shopping-cart"></i> Cart <div id="cartCounter" style="display:inline"></div></a>
                  </li>
            </ul>
        </div>
    </nav>`;
  document.body.onload = injectCartCount();
}

//Injects a carousel into a certain div that will have 3 images given to it as paths.
function injectCarousel(imageName1, imageName2, imageName3) {
  document.getElementById("injectCarousel").innerHTML = `<div
  id="carouselExampleIndicators"
  class="carousel slide"
  data-ride="carousel"
>
  <ol class="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to="0"
      class="active"
    ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        class="d-block w-100"
        src="../images/Carousel/${imageName1}"
        alt=""
      />
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="../images/Carousel/${imageName2}"
        alt=""
      />
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="../images/Carousel/${imageName3}"
        alt=""
      />
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`;
}

//Injects the name of the product into a certain div.
function injectProductName(productName, latinName) {
  document.getElementById(
    "injectProductName"
  ).innerHTML = `<div class="productName">
    <h2 id="dinosaurName" style="display:inline">${productName}</h2>
    <h3 style="display:inline"><em>(${latinName})</em></h3>
  </div>`;
}

//Injects the product info into a certain div.
function injectProductInfo(
  description,
  manufacturer,
  era,
  dna,
  diet,
  size,
  length,
  height,
  weight,
  difficulty,
  price
) {
  document.getElementById("injectProductInfo").innerHTML = `
    <div class="productDescription">
      <h5>Description:</h5>
      <p>
      ${description}
      </p>
    </div>
    <div class="productDetails">
      <h6>Manufacturer: ${manufacturer}</h6>
      <h6>Era: ${era}</h6>
      <h6>DNA Purity: ${dna}</h6>
      <h6>Diet: ${diet}</h6>
      <h6>Size Category: ${size}</h6>
      <h6>Length: ${length}</h6>
      <h6>Height: ${height}</h6>
      <h6>Weight: ${weight}</h6>
      <h6>Difficulty Rating: ${difficulty}</h6>
    </div>
  <hr>
  <div class="productOptions">
    <h5>Buy Now:</h5>
    <h6>Quantity:</h6>
    <input
    id="quantityInput"
    type="number"
    value="1"
    min="1"
    max="10"
    />

    <h6>Price:</h6>
    <p id="invisiblePrice" style="display:none">${price}</p>
    <p id="priceDisplay">${price.toLocaleString()} USD</p>
    <button type="button" class="btn btn-primary" onclick="addToCart()">
    <i class="fas fa-cart-plus"></i> Add to Cart
    </button>
  </div>`;
}
