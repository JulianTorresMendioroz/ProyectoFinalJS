let CART = [];

console.log('CART:',CART)

const products = [
    
{
    id: 1,
    name: 'Buzo Rojo',
    price: 3200,
    stock: 2,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_724708-MLA51441220077_092022-F.webp'
},
{
    id: 2,
    name: 'Buzo Gris',
    price: 4000,
    stock: 4,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_787857-MLA51441263066_092022-F.webp'
},
{
    id: 3,
    name: 'Buzo Marron',
    price: 3500,
    stock: 6,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_724708-MLA51441220077_092022-F.webp'
},
{
    id: 4,
    name: 'Buzo Rosa',
    price: 4000,
    stock: 3,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_903891-MLA51441157496_092022-F.webp.'
}];
 
console.log(products)

const divCards = document.querySelector(".divCards"); 

console.log('divcards', divCards)

// Ver productos en home 

products.forEach((product) => {

    let div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `

    <img class="imgProd"src="${product.img}" alt="BuzoImg">
    <br>
    <h5>${product.name}</h5>
    <p>PRECIO: $${product.price}</p>
    
    `;

    divCards.append(div)

    let buttonsAddCart = document.createElement('button')
    buttonsAddCart.classList.add('btnAddCart')
    buttonsAddCart.innerText = 'Agregar al carrito'

    div.append(buttonsAddCart)
    
    // Push al carrito

    buttonsAddCart.addEventListener('click', () => {

            CART.push(product)

    let divCart = document.getElementById('divCart')

    divCart.classList.add('divCards')

    divCart.innerHTML = "";

    CART.forEach((product) => {

    let divSeeProdCart = document.createElement('div')

    console.log('DIVPRODS', divSeeProdCart)

    divSeeProdCart.classList.add('card')

      divSeeProdCart.innerHTML = `

      <img class="imgProd"src="${product.img}" alt="BuzoImg">
      <br>
      <h5>${product.name}</h5>
      <p>PRECIO: $${product.price}</p>
      <button class="buttonDelete">ELIMINAR ARTICULO</button>`;


          divCart.append(divSeeProdCart) 

          let buttonDelete = divSeeProdCart.querySelector('.buttonDelete')

          buttonDelete.addEventListener('click', () => {
     
            deleteId(product.id)



              
          }) 
     })
})

})

// Actualizar carrito 

function updatedCart () {

    
    divCart.innerHTML = "";

    CART.forEach((product) => {
    
        let divSeeProdCart = document.createElement('div')
    
        console.log('DIVPRODS', divSeeProdCart)
    
        divSeeProdCart.classList.add('card')
    
          divSeeProdCart.innerHTML = `
    
          <img class="imgProd"src="${product.img}" alt="BuzoImg">
          <br>
          <h5>${product.name}</h5>
          <p>PRECIO: $${product.price}</p>
          <button class="buttonDelete">ELIMINAR ARTICULO</button>`;
          
    
              divCart.append(divSeeProdCart) 

              let buttonDelete = divSeeProdCart.querySelector('.buttonDelete')

          buttonDelete.addEventListener('click', () => {

            deleteId(product.id)
            

          })
    })

}

const deleteId = (id) => {

    let indexProd = CART.findIndex(prod => prod.id === id);
    
	CART.splice(indexProd, 1);

    updatedCart()

}

    const totalCart = () => {

        let totalCartDiv = document.querySelectorAll('.divTotal')    
    
        let subDivTotal = document.createElement('div')
    
        subDivTotal.classList.add('subDivTotal')

        totalOnCart = CART.reduce((acc, el) => acc + el.price, 0)

        console.log('TOTALCARRITO',totalOnCart)

        subDivTotal.innerHTML = `
    
        <h3 class="totalOnCart">SU TOTAL DE LA COMPRA ES: $${totalOnCart}</h3>
    
        `;

        totalCartDiv.append(subDivTotal)
    
    }

