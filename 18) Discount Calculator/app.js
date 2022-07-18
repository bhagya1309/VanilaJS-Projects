const calculate = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let billAmt = document.getElementById("amount").value;
  let percentage = document.getElementById("discount__percentage").value;
  let discountAmt = document.getElementById("discount__amount");
  let finalPay = document.getElementById("pay");

  discountAmt.value = (billAmt * percentage) / 100;
  finalPay.value = billAmt - discountAmt.value;
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
