//Event Handler for the Add Button Addition button 
document.querySelector('button.ctrlAdd').addEventListener('click',()=>{
    let target = document.querySelector('div.quantity-selector input');
    let value = parseInt(target.value);
    value++;
    target.value = value;
    
},false);

//Event Handler for the Subtraction button 
document.querySelector('button.ctrlSub').addEventListener('click',()=>{
    let target = document.querySelector('div.quantity-selector input');
    let value = parseInt(target.value);
    if(value > 1){
        value--;
    }
    else{
        value = 1;
    } 
    target.value = value;  
},false);

document.getElementById('add-to-cart-btn').addEventListener('click', ()=>{
    document.querySelector('aside.mini-cart').classList.add('show');
})