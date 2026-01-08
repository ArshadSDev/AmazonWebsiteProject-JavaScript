export const cart=[];

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