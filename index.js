let CART = [];

console.log("CART:", CART);

let divCards = document.querySelector(".divCards");

divCards.classList.add(".divCards");

fetch("/products.json")
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      let div = document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `
    
        <img class="imgProd"src="${product.img}" alt="BuzoImg">
        <br>
        <h5>${product.name}</h5>
        <p>PRECIO: $${product.price}</p>
        
        `;

      divCards.append(div);

      let buttonsAddCart = document.createElement("button");
      buttonsAddCart.classList.add("btnAddCart");
      buttonsAddCart.innerText = "Agregar al carrito";

      div.append(buttonsAddCart);

      // Push al carrito

      buttonsAddCart.addEventListener("click", () => {
        CART.push(product);

        let divCart = document.getElementById("divCart");

        divCart.classList.add("divCards");

        divCart.innerHTML = "";

        CART.forEach((product) => {
          let divSeeProdCart = document.createElement("div");

          console.log("DIVPRODS", divSeeProdCart);

          divSeeProdCart.classList.add("card");

          divSeeProdCart.innerHTML = `
    
          <img class="imgProd"src="${product.img}" alt="BuzoImg">
          <br>
          <h5>${product.name}</h5>
          <p>PRECIO: $${product.price}</p>
          <button class="buttonDelete">ELIMINAR ARTICULO</button>`;

          divCart.append(divSeeProdCart);

          updatedCart();

          let buttonDelete = divSeeProdCart.querySelector(".buttonDelete");

          buttonDelete.addEventListener("click", () => {
            deleteId(product.id);
            updatedCart();
          });
        });
      });
    });
  });

let totalCartDiv = document.querySelector(".divTotal");

let subDivTotal = document.createElement("div");

subDivTotal.classList.add("subDivTotal");

// Actualizar vista del carrito

function updatedCart() {
  divCart.innerHTML = "";

  CART.forEach((product) => {
    let divSeeProdCart = document.createElement("div");

    console.log("DIVPRODS", divSeeProdCart);

    divSeeProdCart.classList.add("card");

    divSeeProdCart.innerHTML = `
    
          <img class="imgProd"src="${product.img}" alt="BuzoImg">
          <br>
          <h5>${product.name}</h5>
          <p>PRECIO: $${product.price}</p>
          <button class="buttonDelete">ELIMINAR ARTICULO</button>`;

    divCart.append(divSeeProdCart);

    let totalOnCart = CART.reduce((acc, el) => acc + el.price, 0);

    console.log("TOTALCARRITO", totalOnCart);

    subDivTotal.innerHTML = `
          
              <h3 class="totalOnCart">SU TOTAL DE LA COMPRA ES: $${totalOnCart}</h3>
          
              `;

    totalCartDiv.append(subDivTotal);

    if (CART.length >= 1) {
      totalCartDiv.style.display = "flex";
    }

    let buttonDelete = divSeeProdCart.querySelector(".buttonDelete");

    buttonDelete.addEventListener("click", () => {
      deleteId(product.id);
    });
  });
}

// Eliminar productos del carrito 

const deleteId = (id) => {
  let indexProd = CART.findIndex((prod) => prod.id === id);

  CART.splice(indexProd, 1);

  if (CART.length == 0) {
    totalCartDiv.style.display = "none";
  }

  updatedCart();
};

// Suma total del carrito

const totalCart = () => {
  let totalCartDiv = document.querySelectorAll(".divTotal");

  let subDivTotal = document.createElement("div");

  subDivTotal.classList.add("subDivTotal");

  let totalOnCart = CART.reduce((acc, el) => acc + el.price, 0);

  console.log("TOTALCARRITO", totalOnCart);

  subDivTotal.innerHTML = `
    
        <h3 class="totalOnCart">SU TOTAL DE LA COMPRA ES: $${totalOnCart}</h3>
    
        `;

  totalCartDiv.appendChild(subDivTotal);
};

// Guardar datos en local storage

function SaveLocalStorage(key, value) {
  localStorage.setItem(key, value);

  SaveLocalStorage("Product List", JSON.parse(products));
}
