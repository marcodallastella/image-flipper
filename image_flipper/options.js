document.getElementById('save').addEventListener('click', function() {
  const keyword = document.getElementById('keyword').value.trim();
  
  chrome.storage.sync.set({ keyword: keyword }, function() {
    const status = document.getElementById('status');
    status.textContent = 'Saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
});

// Load saved keyword
chrome.storage.sync.get('keyword', function(data) {
  if (data.keyword) {
    document.getElementById('keyword').value = data.keyword;
  }
});