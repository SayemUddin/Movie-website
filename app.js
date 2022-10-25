function getValueByID(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
};

function setValueById(textFieldId, value){
    const textField = document.getElementById(textFieldId);
    textField.innerText = value;

};
function getCharge(amount){
    let charge;
    if(amount>=0 && amount<=500){
        charge = 50;
    }
    else if(amount>500 && amount<=800){
        charge = 100;
    }
    else if(amount>800 && amount<=1000){
        charge = 150;
    }
    else{
        charge = 200;
    }
    return charge;
};


let selectedItems = 0;

// Mario button
document.getElementById('mario-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('super-mario');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});
// Gta button
document.getElementById('gta-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('gta-v');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});
//Call of duty button
document.getElementById('wild-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('wild-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});



//Added event lister to the card items

//assassin cread button
document.getElementById('assassin-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('assassin-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

//PUBG button
document.getElementById('pubg-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('pubg-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Street fighter button
document.getElementById('street-fighter-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('street-fighter-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Grid race button
document.getElementById('grid-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('grid-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Airforce button
document.getElementById('airforce-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('airforce-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// Cricket button
document.getElementById('cricket-btn').addEventListener('click', ()=>{
    selectedItems++;
    setValueById('selected-items',selectedItems);
    const selectedProductPrice = getValueByID('cricket-price');
    const productPrice = selectedProductPrice + getValueByID('product-price');
    setValueById('product-price',productPrice);
    const productCharge = getCharge(productPrice);
    setValueById('delivery-price',productCharge);
    setValueById('shipping-price',productCharge);
    const totalPrice = productPrice+(productCharge*2);
    setValueById('total-price',totalPrice);
    const taxPrice = (getValueByID('total-price')*0.15);
    setValueById('tax',taxPrice.toFixed(2));
    const grandTotal = parseFloat(taxPrice.toFixed(2)) + getValueByID('total-price');
    setValueById('grand-total',grandTotal);
});

// checkout(modal) button
document.getElementById('checkout-btn').addEventListener('click',()=>{
    const modalTotalPrice = getValueByID('grand-total');
    setValueById('modal-total-price',modalTotalPrice);
})

