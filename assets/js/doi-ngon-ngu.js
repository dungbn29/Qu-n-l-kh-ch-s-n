let currentLanguage = 'vi';

const languageData = {
    vi: {
        toggleButton: 'VN',
        logoImage: 'assets/images/co-vn.png',
        // soDoPhong: 'Sơ đồ phòng',
        leTan: 'Lễ Tân',
        lichDatPhong: 'Lịch Đặt Phòng',
        khachDoan: 'Khách Đoàn',
        thongKe: 'Thống Kê',
        phanHoi: 'Phản Hồi',
        dichVu: 'Dịch Vụ'
    },
    en: {
        toggleButton: 'EN',
        logoImage: 'assets/images/co-anh.png',
        // soDoPhong: 'Room Map',
        leTan: 'Receptionist',
        lichDatPhong: 'Book room',
        khachDoan: 'Team',
        thongKe: 'Statistics',
        phanHoi: 'Feedback',
        dichVu: 'Service'
    }
};

function toggleLanguage() {
  const toggleButton = document.getElementById('btnToggleLang');
  const logoImage = document.getElementById('logo');
  // const soDoPhong = document.getElementById('so-do-phong');
  const leTan = document.getElementById('le-tan');
  const lichDatPhong = document.getElementById('lich-dat-phong');
  const khachDoan = document.getElementById('khach-doan');
  const thongKe = document.getElementById('thong-ke');
  const phanHoi = document.getElementById('phan-hoi');
  const dichVu = document.getElementById('dich-vu');

  if (currentLanguage === 'vi') {
    currentLanguage = 'en';
    } else {
    currentLanguage = 'vi'; 
  }
  toggleButton.textContent = languageData[currentLanguage].toggleButton;

  logoImage.src = languageData[currentLanguage].logoImage;

  // soDoPhong.textContent = languageData [currentLanguage].soDoPhong;
  leTan.textContent = languageData [currentLanguage].leTan;
  lichDatPhong.textContent = languageData [currentLanguage].lichDatPhong;
  khachDoan.textContent = languageData [currentLanguage].khachDoan;
  thongKe.textContent = languageData [currentLanguage].thongKe;
  phanHoi.textContent = languageData [currentLanguage].phanHoi;
  dichVu.textContent = languageData [currentLanguage].dichVu;

  logoImage.alt = "Logo " + (currentLanguage === 'vi' ? 'Tiếng Việt' : 'English');
}

const toggleButton = document.getElementById('btnToggleLang');
toggleButton.addEventListener('click', toggleLanguage);