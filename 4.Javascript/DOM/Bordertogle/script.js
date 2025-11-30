 function toggleBorder() {
      let box = document.getElementById("box");

      if (box.style.border) {
        box.style.border = "";  // remove border
      } else {
        box.style.border = "5px solid red";  // add border
      }
    }