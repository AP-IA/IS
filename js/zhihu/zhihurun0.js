window.onload = function () {

  chrome.storage.sync.get('page', function (page) {
    if (page.page == 1) {
     
      var data = document.getElementsByTagName('pre')[0].innerHTML;
      chrome.storage.sync.set({ 'user': data });
      String(data)
      var index = data.indexOf("\"url_token\":") + 13;
      var id = "";
      for (var i = index; data[i] != "\""; i++) {
        id += data[i];
      }
      chrome.storage.sync.set({ 'id': id });
     
      var url1 = "https://www.zhihu.com/people/" + id;
      window.open(url1)
      window.close();
    }
  })
}
