//document.getElementById('table-div').appendChild(createTable(3, 4));

document.getElementById('btn').click()

document.getElementById("btn").addEventListener('click', function() {
  let tb = createTable(document.getElementById("row").value, document.getElementById("colum").value);

  document.getElementById('tableDiv').appendChild(tb);

});

function createTable(r, c) {

  let tb = document.createElement('table');

  for (let i = 0; i < r; i++) {
    let row = document.createElement('tr');
    for (var j = 0; j < c; j++) {
      let column = document.createElement('td');
      let input = document.createElement("input");
			input.type = "text";
      column.appendChild(input);
      
      row.appendChild(column);
    }
    tb.appendChild(row);
  }

  return tb;
}
