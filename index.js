// const totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
// console.log(totalPrice);
// if(totalPrice >= 200.00){
//     const applyButton = document.getElementById('applyButton');
//     applyButton.removeAttribute("disabled");
// }
function addToEntry(name) {
  const calculateEntry = document.getElementById("item-name");
  const count = calculateEntry.childElementCount;
  const p = document.createElement("p");
  // p.classList.add("my-2");
  p.innerHTML = `${count + 1}. ${name}`;
  calculateEntry.appendChild(p);
}
function totalPriceCalc(pPrice) {
  const totalCost = document.getElementById("totalPrice");
  const previousTotalCost = parseFloat(totalCost.innerText);

  totalCost.innerText = (previousTotalCost + pPrice).toFixed(2);
  if (totalCost.innerText > 0) {
    const purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.removeAttribute("disabled");
  }
  if (totalCost.innerText >= 200.0) {
    const applyButton = document.getElementById("applyButton");
    applyButton.removeAttribute("disabled");
  }
  const cost = totalCost.innerText;
  return cost;
}
function afterDiscount(){
    const costWithoutDiscount = parseFloat(document.getElementById("totalPrice").innerText);
  const Discount = parseFloat(document.getElementById("discountMoney").innerText);
  const amountWithDiscount = document.getElementById("priceAfterDiscount");
  const previousTotalDis = parseFloat(amountWithDiscount.innerText);
  amountWithDiscount.innerText = (costWithoutDiscount - Discount).toFixed(2);
}

function calculate(name, Price) {
  // console.log("clicked");
  const pName = document.getElementById(name).innerText;
  // console.log(pName)
  const price = parseFloat(document.getElementById(Price).innerText);
  addToEntry(pName);
  totalPriceCalc(price); 
  afterDiscount();
  // const couponCode = document.getElementById('coupon').value;
  document.getElementById("applyButton").addEventListener("click", function () {
    const couponCode = document.getElementById("coupon").value;

    // console.log(Cost);
    if (couponCode == "SELL200") {
      const discountAmount = document.getElementById("discountMoney");
      const previousTotalDis = parseFloat(discountAmount.innerText);
      const Cost = parseFloat(document.getElementById("totalPrice").innerText);
      discountAmount.innerText = ((Cost * 20) / 100).toFixed(2);
      
    }
    afterDiscount();
    return ;
  });
}

function congo(){
    const CostWithoutDiscount = document.getElementById("totalPrice");
    const DiscountGiven = document.getElementById("discountMoney");
    const AmountWithDiscount = document.getElementById("priceAfterDiscount");
    const Entry = document.getElementById("item-name");
    CostWithoutDiscount.innerText = '00.00 ';
    DiscountGiven.innerText = '00.00 ';
    AmountWithDiscount.innerText = '00.00 ';
    Entry.innerText = '';
}
