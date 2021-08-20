
//For updatting the separate costs
function updateProductCost(isFirst, name, price){
  if(isFirst == true){
    document.getElementById(name + '-cost').innerText = price;
  }
  else if(isFirst == false){
    document.getElementById(name + '-cost').innerText = price;
  }
  totalPrice();
}

//For getting all the values of desired ID's
function getIdText(nm){
    return parseInt(document.getElementById(nm + '-cost').innerText);
}

//TotalPrice without applying promo code
function totalPrice(){
const bstPrc = getIdText('bst');
const memPrc = getIdText('memory');
const strPrc = getIdText('storage');
const delPrc = getIdText('del');
 document.getElementById('total-cost').innerText =  bstPrc + memPrc + strPrc + delPrc;
 document.getElementById('finalTotal').innerText = bstPrc + memPrc + strPrc + delPrc;

}

//Totalprice If user use correct promocode.
function promo(){
    const promoValue = document.getElementById('promo').value;
    if(promoValue.toLowerCase() == 'stevekaku'){
        const prvFnlTtl = parseInt(document.getElementById('finalTotal').innerText) ;
        
        const waiver = parseFloat((prvFnlTtl * 20)/100);
         
        document.getElementById('finalTotal').innerText = prvFnlTtl - waiver;
    }
    
}


//For Memory options
document.getElementById('memory-1').addEventListener('click', function () {
    updateProductCost(true, 'memory', 0);
});
document.getElementById('memory16').addEventListener('click', function () {
    updateProductCost(false, 'memory', 180);
})

//For Storage cost options
document.getElementById('st-1').addEventListener('click', function () {
    updateProductCost(true, 'storage', 0);
});
document.getElementById('st512').addEventListener('click', function () {
    updateProductCost(false, 'storage', 100);
})
document.getElementById('st1tr').addEventListener('click', function () {
    updateProductCost(false, 'storage', 180);
})


//For Delievry charge options
document.getElementById('free-1').addEventListener('click', function () {
    updateProductCost(true, 'del', 0);
})
document.getElementById('charge').addEventListener('click', function () {
    updateProductCost(false, 'del', 20);
})

//promo code apply
document.getElementById('apply').addEventListener('click', function(){
    promo();
})
