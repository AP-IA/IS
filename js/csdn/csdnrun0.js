
window.onload = function () {

  chrome.storage.sync.get('page', function (page) {
    if (page.page == 1) {
      var data = document.getElementsByTagName('pre')[0].innerHTML;
      
      chrome.storage.sync.set({ 'user': data });
      chrome.storage.sync.set({ 'index1': 2 })
      var csdn
      chrome.storage.sync.get('csdn', function (budget) {
        var url1 = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=lately&noMore=false&username=" + budget.csdn;
        window.open(url1)
        setTimeout(code, 400)
      })
    }
  })
}
function code() {
  open(location, '_self').close();
}

