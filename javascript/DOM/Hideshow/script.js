function toggleBox() {
      let box = document.getElementById("box");

      if (box.style.display === "none") {
        box.style.display = "flex";  // show
      } else {
        box.style.display = "none";  // hide
      }
    }