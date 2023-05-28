let currentLanguage = 'vi';

const languageData = {
    vi: {
        toggleButton: 'VN',
        logoImage: 'assets/images/co-vn.png'
    },
    en: {
        toggleButton: 'EN',
        logoImage: 'assets/images/co-anh.png'
    }
};

function toggleLanguage() {
  const toggleButton = document.getElementById('btnToggleLang');
  const logoImage = document.getElementById('logo');
  if (currentLanguage === 'vi') {
    currentLanguage = 'en';
    } else {
    currentLanguage = 'vi'; 
  }
  toggleButton.textContent = languageData[currentLanguage].toggleButton;
  logoImage.src = languageData[currentLanguage].logoImage;
  logoImage.alt = "Logo " + (currentLanguage === 'vi' ? 'Tiếng Việt' : 'English');
}

const toggleButton = document.getElementById('btnToggleLang');
toggleButton.addEventListener('click', toggleLanguage);