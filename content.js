// Çerezleri temizlemek için
const clearCookies = () => {
  document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  });
};

// Yerel depolama verilerini temizlemek için
const clearLocalStorage = () => {
  localStorage.clear();
};

// Kullanıcı bilgilerini ve oturum durumunu içeren DOM elemanlarını gizler
const hideUserInfo = () => {
  const userElements = document.querySelectorAll('[id*="avatar"], [class*="user"], [class*="account"]');
  userElements.forEach(el => el.style.display = 'none');
};

// Reklamları hedeflemek için DOM manipülasyonu yapar.
const removeAds = () => {
  const adElements = document.querySelectorAll('.video-ads, .ad-container, .ytp-ad-module, .ytp-ad-overlay-container, .ytp-ad-image-overlay');
  adElements.forEach(ad => ad.remove());
};

// Çerezleri, yerel depolamayı temizle ve kullanıcı bilgilerini gizle
const performCleanup = () => {
  clearCookies();
  clearLocalStorage();
  hideUserInfo();
  removeAds();
};

// Sayfa yüklendiğinde ve DOM değiştiğinde işlem yapmak
document.addEventListener('DOMContentLoaded', performCleanup);
const observer = new MutationObserver(performCleanup);
observer.observe(document.body, { childList: true, subtree: true });
