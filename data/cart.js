export const cart=[{
    productId:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity:2
},{
    productId:'54e0eccd-8f36-462b-b68a-8182611d9add',
    quantity:2
}];

export function addToCart(productId){
    let matchingItems;

    cart.forEach((cartItems)=>{
    if(productId==cartItems.productId)
    matchingItems=cartItems;
    })

    if(matchingItems){
    matchingItems.quantity+=1;
    }
    else{
    cart.push({
    productId: productId,
    quantity: 1
    })
    }            
}