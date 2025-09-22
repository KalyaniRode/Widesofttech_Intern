 function addRow() {
      let table = document.getElementById("myTable");

      // new row create
      let row = table.insertRow();

      // insert cells (columns)
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);

      // put some values
      cell1.innerHTML = "lovi";
      cell2.innerHTML = Math.floor(Math.random() * 50) + 20; // random age
    }