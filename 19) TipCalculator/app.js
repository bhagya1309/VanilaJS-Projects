var calc = function () {
  var bill = Number(document.getElementById("bill").value);
  var split = Number(document.getElementById("split").value);
  var tip = bill * 0.15;
  var totalBill = bill + tip;
  var splitPerson = totalBill / split;
  document.getElementById("tip").innerHTML = "Rs" + Number(tip).toFixed(2);
  document.getElementById("total").innerHTML =
    "Rs" + Number(totalBill).toFixed(2);
  document.getElementById("splitTotal").innerHTML =
    "Rs" + Number(splitPerson).toFixed(2);
};
