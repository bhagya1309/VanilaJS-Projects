let button = document.getElementById("btn");
button.addEventListener("click", function () {
  const gram = parseInt(document.getElementById("grams").value);
  const type = document.getElementById("type").value;

  if (gram === "" || isNaN(gram)) {
    document.getElementById("grams").focus();
    document.getElementById("error").innerHTML =
      "Please provide a valid weight";
    document.getElementById("output").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = "";
    switch (type) {
      case "Pounds":
        convert_pounds(gram);
        break;
      case "Kilograms":
        convert_kilograms(gram);
        break;
      case "Ounces":
        convert_ounces(gram);
        break;
      case "Stones":
        convert_stones(gram);
        break;
      default:
        alert("Error");
    }
    function convert_pounds(gram) {
      let rate = 0.0022,
        pounds;
      pounds = gram * rate;
      document.getElementById("output").innerHTML =
        gram + " grams = " + pounds.toFixed(3) + " pound";
    }
    function convert_kilograms(gram) {
      let rate = 0.001,
        kilogram;
      kilogram = gram * rate;
      document.getElementById("output").innerHTML =
        gram + " grams = " + kilogram.toFixed(3) + " Kg";
    }
    function convert_ounces(gram) {
      let rate = 0.035274,
        ounces;
      ounces = gram * rate;
      document.getElementById("output").innerHTML =
        gram + " grams = " + ounces.toFixed(3) + " ounce";
    }
    function convert_stones(gram) {
      let rate = 0.00015,
        stones;
      stones = gram * rate;
      document.getElementById("output").innerHTML =
        gram + " grams = " + stones.toFixed(3) + " stone";
    }
  }
});
