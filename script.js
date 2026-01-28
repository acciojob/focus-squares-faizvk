const squares = document.querySelectorAll(".square");

const lavender = "#E6E6FA";
const coffee = "#6F4E37";

squares.forEach(activeSquare => {
  activeSquare.addEventListener("mouseover", () => {
    squares.forEach(square => {
      if (square !== activeSquare) {
        square.style.backgroundColor = coffee;
      }
    });
  });

  activeSquare.addEventListener("mouseout", () => {
    squares.forEach(square => {
      square.style.backgroundColor = lavender;
    });
  });
});
