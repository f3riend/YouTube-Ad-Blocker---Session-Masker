// Arka planda YouTube reklamlarını engelleyen bir dinleyici ekleyin.
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  { urls: ["*://*.googleads.g.doubleclick.net/*", "*://*.youtube.com/ptracking/*", "*://*.youtube.com/api/stats/*", "*://*.youtube.com/get_video_info*"] },
  ["blocking"]
);
