function flipImages() {
  chrome.storage.sync.get('keyword', function(data) {
    if (!data.keyword) return;
    
    const images = document.getElementsByTagName('img');
    for (let img of images) {
      if (img.alt && img.alt.toLowerCase().includes(data.keyword.toLowerCase())) {
        img.style.transform = 'rotate(180deg)';
      }
    }
  });
}

// Run on page load
flipImages();

// Watch for new images
const observer = new MutationObserver(flipImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});