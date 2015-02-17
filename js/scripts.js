
$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = parseInt($("input#side1").val());
    var inputtedSide2 = parseInt($("input#side2").val());
    var inputtedSide3 = parseInt($("input#side3").val());
    var newTriangle = {side1: inputtedSide1, side2: inputtedSide2, side3: inputtedSide3,
                        type: function() {
                          if (this.side1 + this.side2 <= this.side3 || this.side2 + this.side3 <= this.side1 || this.side1 + this.side3 <= this.side2) {
                            return "not a triangle"
                          } else if (this.side1 === this.side2 && this.side1 === this.side3) {
                            return "equilateral"
                          } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
                            return "isosceles"
                          } else {
                            return "scalene"
                          }
                        }
                    };


    if (newTriangle.type() === "not a triangle") {
      alert("This is not a triangle!")
    } else if (newTriangle.type() === "equilateral") {
      $(".equilateral-list").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>")
    } else if (newTriangle.type() === "isosceles") {
      $(".isosceles-list").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>")
    } else {
      $(".scalene-list").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>")
    }


   $("input#side1").val("");
   $("input#side2").val("");
   $("input#side3").val("");
  });

});
