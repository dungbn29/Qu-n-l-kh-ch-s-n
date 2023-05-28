function addReceptionist() {
  var nameInput = document.getElementById("name");
  var positionInput = document.getElementById("position");
  
  var name = nameInput.value;
  var position = positionInput.value;
  
  if (name === "" || position === "") {
    alert("Vui lòng điền đầy đủ thông tin lễ tân.");
    return;
  }
  
  var table = document.getElementById("receptionist-table");
  var newRow = table.insertRow(table.rows.length);
  
  var nameCell = newRow.insertCell(0);
  var positionCell = newRow.insertCell(1);
  var actionCell = newRow.insertCell(2);
  
  nameCell.innerHTML = name;
  positionCell.innerHTML = position;
  actionCell.innerHTML = "<button onclick='editReceptionist(this)' class='xoa' >Sửa</button> <button onclick='deleteReceptionist(this)' class='xoa'>Xóa</button>";
  
  nameInput.value = "";
  positionInput.value = "";
}

function editReceptionist(button) {
  var row = button.parentNode.parentNode;
  var nameCell = row.cells[0];
  var positionCell = row.cells[1];
  
  var name = prompt("Nhập tên lễ tân mới", nameCell.innerHTML);
  var position = prompt("Nhập vị trí mới", positionCell.innerHTML);
  
  if (name === null || position === null) {
    return;
  }
  
  nameCell.innerHTML = name;
  positionCell.innerHTML = position;
}

function deleteReceptionist(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
