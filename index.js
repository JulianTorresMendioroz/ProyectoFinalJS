let CART = [];

console.log('CART:',CART)

// function newUserOn() { 

// let newUser = prompt('Hola, ingrese su nuevo usuario')

// if((newUser == '') || (newUser == ' ')) {

//     console.log('Debe ingresar un usuario para poder continuar')

// }else{

//     alert(`Bienvenido a CapHoodies ${newUser}`)

// }}

// //newUserOn();

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
    
    buttonsAddCart.addEventListener('click', () => {

            CART.push({
                id: product.id,
                name: product.name,
                price: product.price,
                stock: product.stock,
                img: product.img

            })
    })

    

})

let buttonCart = document.querySelector('.seeCartButton')

console.log('button',buttonCart)

let divCart = document.getElementById('divCart')

divCart.classList.add('divCards')

divCart.innerHTML = "";

buttonCart.addEventListener('click', ()=> {

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


            // buttonDelete.forEach(button => {button.addEventListener('click', deleteArticle)})
         
            // function deleteArticle() {
         
            //      deleteId(product.id)
         
         
         
            // }
         
    
   })

  


   let totalCartDiv = document.querySelector('.divTotal')    

   let subDivTotal = document.createElement('div')
   
   subDivTotal.classList.add('subDivTotal')

   totalOnCart = CART.reduce((acc, el) => acc + el.price, 0)

   console.log('TOTALCARRITO',totalOnCart)

   subDivTotal.innerHTML = `
   
       <h3 class="totalOnCart">SU TOTAL DE LA COMPRA ES: $${totalOnCart}</h3>
   
    `;

    totalCartDiv.append(subDivTotal)

})


const deleteId = (id) => {

    let idProd = CART.find((el) => el.id === id)

    CART = CART.filter((cartId) => {

        return cartId != idProd

    })
    console.log('ID cart',idProd)
}

























// let divCart = document.querySelector('.divCart')

// let buttonCart = document.createElement('button')

// buttonCart.innerText = 'Ver carrito'

// buttonCart.classList.add('buttonCart')

// divCart.append(buttonCart)


























































// let condition = 1;

// while(condition == 1){ 

// //let userBuy = parseInt(prompt('Que producto desea comprar?  1- Buzo Verde $3200 2- Buzo Rojo $4000 3- Buzo Azul 3500 4- Buzo Blanco $5000'))

// switch(userBuy){

//     case 1:
//         if(product1.stock > 0 ){

//             CART.push(product1);
//             total += product1.price
//             product1.stock -= 1;
//             alert(`Compraste ${product1.name} quedó ${product1.stock} de stock`)

//         }
//         else{
//             alert("No hay stock")
//         }

//         break;
//     case 2:
//         if(product2.stock > 0 ){

//             CART.push(product2);
//             total += product2.price
//             product2.stock -= 1;
//             alert(`Compraste ${product2.name} quedó ${product2.stock} de stock`)
//         }
//         else{
//             alert("No hay stock")
//         }
//         break;
//     case 3:
//         if(product3.stock > 0 ){

//             CART.push(product3);
//             total += product3.price
//             product3.stock -= 1;
//             alert(`Compraste ${product3.name} quedó ${product3.stock} de stock`)
//         }
//         else{
//             alert("No hay stock")
//         }
//         break;
//     case 4:
//         if(product4.stock > 0 ){

//             CART.push(product4);
//             total += product4.price
//             product4.stock -= 1;
//             alert(`Compraste ${product4.name} quedó ${product4.stock} de stock`)
//         }
//         else{
//             alert("No hay stock")
//         }
//         break;
//     }


//    // condition = prompt('Desea seguir comprando? 1- Si 2- No')

//     if(condition!=1){
//     alert(`Tu compra ha sido realizada, el total del monto es: $${CART.map(el => el.price).reduce(
//         (previousValue, currentValue) => previousValue + currentValue, 0)}`)
//     }
// }



















// // METODOS DE PRUEBA 

// // Suma de precios

// const totalPrecio = PRODUCTS.reduce((acc,el) => acc + el.price, 0);

// console.log(`El precio total de todos los buzos es: $${total} pesos`);

// // Mostras nombres de productos

// const namesProducts = PRODUCTS.map((el) => el.name);

// console.log(`El nombres de los buzos son: ${namesProducts}`);

// // Recorrer array con forEach

// let recorrido = PRODUCTS.forEach((el) => {

//     console.log(`el stock es de: ${el.stock}`)

// })

// // Consulto si el nombre es estrictamente igual a buzo verde 

// let result = PRODUCTS.some((el) => el.name === 'Buzo Verde')

// console.log(result)
// }
