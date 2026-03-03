const products = [
    {id:1,name:"product1",price:25},
    {id:2,name:"product2",price:50},
    {id:3,name:"product3",price:45},
];
//display all products using forEach
products.forEach(product => {
    console.log(product);
});
//display products with price above 40 using filter
const newArray = products.filter(product => product.price > 40);
console.log(newArray);
//add product2 to cart using spread operator with a new key quantity and assign it a value of 1
// const product2 = products.find(product => product.name === "product2");
// cart = [...cart, {...product2, quantity: 1}];
// const cartItem = products.find((product) => product.name === "product2");
// cart = [...cart, { ...cartItem, quantity: 1 }];
// console.log(cart);
const cartItem = {...products[1], quantity: 1};
console.log(cartItem);
let cart = []
//Display all products using forEach
function displayProducts(){
    products.forEach(product => {
        console.log(product);
    });
}

//Add product 2 to cart using spread operator with a
//new key quanity and assign 1
function addToCart(id){
    const product = products.find(product => product.id === id);
    cart = [...cart, {...product, quantity: 1}];

}
//display cart
function displayCart(){
    cart.forEach(item => {
        console.log(item);
    });
}



displayProducts()
addToCart(2)
displayCart()
addToCart(1)
displayCart()
