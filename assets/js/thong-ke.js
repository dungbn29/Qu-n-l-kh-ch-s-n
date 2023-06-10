const revenueData = [];

// Hàm tính giá tiền niêm yết theo loại phòng
function calculatePrice(roomType) {
  let price = 0;
  if (roomType === 'Tiêu chuẩn') {
    price = 1000000;
  } else if (roomType === 'Thương gia') {
    price = 3000000;
  } else if (roomType === 'Tổng thống') {
    price = 10000000;
  }
  return price;
}

// Hàm tính số ngày giữa hai ngày
function calculateDays(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // 1 ngày = 24 giờ * 60 phút * 60 giây * 1000 milliseconds
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.round(Math.abs((end - start) / oneDay)) + 1; // Số ngày bằng tổng số milliseconds chia cho số milliseconds trong 1 ngày
  return days;
}

// Hàm thêm dữ liệu vào bảng thống kê
function addRevenue() {
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const roomType = document.getElementById('room-type').value;
  const bookingCount = parseInt(document.getElementById('booking-count').value);

  const price = calculatePrice(roomType);
  const days = calculateDays(startDate, endDate);
  const revenue = price * bookingCount * (days-1);

  revenueData.push({
    startDate,
    endDate,
    roomType,
    bookingCount,
    revenue
  });

  renderTable();
  calculateTotalRevenue();
}

// Hàm xóa dữ liệu khỏi bảng thống kê
function deleteRevenue(index) {
  revenueData.splice(index, 1);
  renderTable();
  calculateTotalRevenue();
}

// Hàm hiển thị dữ liệu trong bảng thống kê
function renderTable() {
  const tableBody = document.getElementById('revenue-table-body');
  tableBody.innerHTML = '';

  revenueData.forEach((data, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.startDate} - ${data.endDate}</td>
      <td>${calculatePrice(data.roomType)}</td>
      <td>${data.roomType}</td>
      <td>${data.bookingCount}</td>
      <td>${data.revenue}</td>
      <td>
        <button onclick="deleteRevenue(${index})" class="button-thong-ke">Xóa</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Hàm tính tổng doanh thu
function calculateTotalRevenue() {
  const totalRevenueElement = document.getElementById('total-revenue');
  const totalRevenue = revenueData.reduce((total, data) => total + data.revenue, 0);
  totalRevenueElement.textContent = totalRevenue.toLocaleString() + ' vnđ';
}
