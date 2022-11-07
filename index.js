const CART = [];
let total = 0;

console.log('Cart:',CART)

function newUserOn() { 

let newUser = prompt('Hola, ingrese su nuevo usuario')

if((newUser == '') || (newUser == ' ')) {

    console.log('Debe ingresar un usuario para poder continuar')

}else{

    alert(`Bienvenido a CapHoodies ${newUser}`)

}}

newUserOn();

class Product {

    constructor(id, name, price, stock){
        
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    
    }

}

const product1 = new Product (1,'Buzo Verde', 3200, 2)
const product2 = new Product (2,'Buzo Rojo', 4000, 2)
const product3 = new Product (3,'Buzo Azul', 3500, 6)
const product4 = new Product (4,'Buzo Blanco', 5000, 0)

const PRODUCTS = [product1,product2,product3,product4];
 
console.log(PRODUCTS)

PRODUCTS.forEach((prod) => alert(`Los productos de CapHoodies son: ${prod.name}`))

let condition = 1;

while(condition == 1){ 

let userBuy = parseInt(prompt('Que producto desea comprar?  1- Buzo Verde $3200 2- Buzo Rojo $4000 3- Buzo Azul 3500 4- Buzo Blanco $5000'))

switch(userBuy){

    case 1:
        if(product1.stock > 0 ){

            CART.push(product1);
            total += product1.price
            product1.stock -= 1;
            alert(`Compraste ${product1.name} quedó ${product1.stock} de stock`)

        }
        else{
            alert("No hay stock")
        }

        break;
    case 2:
        if(product2.stock > 0 ){

            CART.push(product2);
            total += product2.price
            product2.stock -= 1;
            alert(`Compraste ${product2.name} quedó ${product2.stock} de stock`)
        }
        else{
            alert("No hay stock")
        }
        break;
    case 3:
        if(product3.stock > 0 ){

            CART.push(product3);
            total += product3.price
            product3.stock -= 1;
            alert(`Compraste ${product3.name} quedó ${product3.stock} de stock`)
        }
        else{
            alert("No hay stock")
        }
        break;
    case 4:
        if(product4.stock > 0 ){

            CART.push(product4);
            total += product4.price
            product4.stock -= 1;
            alert(`Compraste ${product4.name} quedó ${product4.stock} de stock`)
        }
        else{
            alert("No hay stock")
        }
        break;
    }


    condition = prompt('Desea seguir comprando? 1- Si 2- No')

    if(condition!=1){
    alert(`Tu compra ha sido realizada, el total del monto es: $${CART.map(el => el.price).reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0)}`)
    }
}

















// METODOS DE PRUEBA 

// Suma de precios

const totalPrecio = PRODUCTS.reduce((acc,el) => acc + el.price, 0);

console.log(`El precio total de todos los buzos es: $${total} pesos`);

// Mostras nombres de productos

const namesProducts = PRODUCTS.map((el) => el.name);

console.log(`El nombres de los buzos son: ${namesProducts}`);

// Recorrer array con forEach

let recorrido = PRODUCTS.forEach((el) => {

    console.log(`el stock es de: ${el.stock}`)

})

// Consulto si el nombre es estrictamente igual a buzo verde 

let result = PRODUCTS.some((el) => el.name === 'Buzo Verde')

console.log(result)

// Metodo filter si el stock es mayor a 1

if (PRODUCTS.filter((el)=> el.stock > 1).length > 0 ) {

    console.log('Hay stock')

}else{

    console.log('No hay stock')

}

// Ordeno productos por precio de menor a mayor 


console.log(productsOrder)