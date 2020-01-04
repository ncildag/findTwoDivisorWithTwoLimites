function myFunction() {

    let ll = +document.getElementById("lowerLimit").value;
    let ul = +document.getElementById("upperLimit").value;
  
    let x = +document.getElementById("firstDivider").value;
    let y = +document.getElementById("secondDivider").value;
  
    let number = [];
    for (i = ll; i < ul; i++) {
      let firstRemainder = i % x;
      let secondRemainder = i % y;
  
      if ((firstRemainder == 0) && (secondRemainder == 0)) {
        number.push(i);
      }
    }
  
    let toplam = number.reduce((a, b) =>
    {
      a += b;
      return a;
    }, 0);
  
    console.log(number);
  
    document.getElementById("quotient").innerHTML = number;
    document.getElementById("quotientSum").innerHTML =toplam;
  }


/** 
$(document).ready(function () {
    $("#findButton").click(myFunction);
});
*/