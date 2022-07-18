function Num(val) {
  document.getElementById("result").value += val;
}
function equal() {
  let input = document.getElementById("result").value;
  let output = eval(input);
  document.getElementById("result").value = output;
}
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  document.getElementById("result").value = "";
});
