function generate() {
  let number = document.getElementById("number").value;
  let table = document.getElementById("table");
  table.innerHTML = "";
  // create table
  for (let i = 0; i < number; i++) {
    //create new rows
    let row = table.insertRow(i);
    for (let j = 0; j < number; j++) {
      //populate each cell inside this row
      row.insertCell(j);
    }
  }
  //populate table
  populate();

  function populate(
    startX = 0,
    endX = number,
    startY = 0,
    endY = number,
    counter = 1
  ) {
    //check if any cells are left to populate
    if (startX >= endX || startY >= endY) {
      return;
    }

    //populate top edge
    for (let i = startX; i < endX; i++) {
      table.rows[startY].cells[i].innerHTML = counter;
      counter++;
    }
    //populate right edge
    for (let i = startY + 1; i < endY; i++) {
      table.rows[i].cells[endX - 1].innerHTML = counter;
      counter++;
    }
    //populate bottom edge
    for (let i = endX - 2; i >= startX; i--) {
      table.rows[endY - 1].cells[i].innerHTML = counter;
      counter++;
    }
    //populate left edge
    for (let i = endY - 2; i >= startY + 1; i--) {
      table.rows[i].cells[startX].innerHTML = counter;
      counter++;
    }
    //recursively call populate for the inner table minus outer edge
    populate(startX + 1, endX - 1, startY + 1, endY - 1, counter);
  }
}
