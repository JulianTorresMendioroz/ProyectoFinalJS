//let newUser = prompt('Ingrese su nombre');

if (newUser == "") {

    console.log('No ingresaste un nombre')

}else {

    console.log(`Hola ${newUser}`)
}

let products = 11;

const cycleProducts = () => {
    
    for(let i=0;i<products;i++){

        console.log(`Los productos disponibles son: ${i}`)
        
    }
}

cycleProducts();
