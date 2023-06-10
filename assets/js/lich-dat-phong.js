function confirmDelete(cell) {
  const confirmResult = confirm("Bạn có muốn xóa lịch đặt phòng này không?");
  if (confirmResult) {
    const cellId = cell.id;
    cell.classList.remove('booked', 'occupied');
    localStorage.removeItem(cellId);
  }
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const roomNumber = document.getElementById('roomNumber').value;
  const day = parseInt(document.getElementById('day').value);
  const status = document.getElementById('status').value;

  const cellId = `room${roomNumber}-${day}`;
  const cell = document.getElementById(cellId);

  if (cell.classList.contains('booked')) {
    cell.classList.remove('booked');
    localStorage.removeItem(cellId);
  } else {
    cell.classList.add(status);
    localStorage.setItem(cellId, status);
  }

  document.getElementById('roomNumber').value = '';
  document.getElementById('day').value = '2';
  document.getElementById('status').value = 'booked';
});

document.addEventListener('click', function(e) {
  const cell = e.target;
  if (cell.tagName === 'TD') {
    if (cell.classList.contains('booked') || cell.classList.contains('occupied')) {
      confirmDelete(cell);
    }
  }
});

window.onload = function() {
  for (let room = 1; room <= 12; room++) {
    for (let day = 2; day <= 8; day++) {
      const cellId = `room${room}-${day}`;
      const status = localStorage.getItem(cellId);
      if (status) {
        const cell = document.getElementById(cellId);
        cell.classList.add(status);
      }
    }
  }
};

// Thêm đoạn mã sau vào cuối script
const allCells = document.querySelectorAll('td[id^="room"]');
allCells.forEach(cell => {
  cell.addEventListener('click', function(e) {
    const confirmResult = confirm("Bạn có muốn xóa lịch đặt phòng này không?");
    if (confirmResult) {
      const cellId = cell.id;
      cell.classList.remove('booked', 'occupied');
      localStorage.removeItem(cellId);
    }
  });
});
