
window.onload = function () {
  chrome.storage.sync.get('page', function (page) {
    if (page.page == 1) {
      var data = new Array();

      var l1 = document.getElementsByTagName('a')
      for (var i = 0; i < l1.length; i++) {

        if (l1.item(i).getAttribute('data-za-detail-view-name') == "Title") {
          data.push("https://www.zhihu.com" + l1.item(i).getAttribute('href') + "\n")
         
          data.push(l1.item(i).innerHTML + "\n");
          
        }
      }
      chrome.storage.sync.set({ 'ask': data })
      chrome.storage.sync.get('id', function (budget) {
        var url3 = "https://www.zhihu.com/people/" + budget.id + "/collections"
        window.open(url3);
        setTimeout(code, 2000)
      })

    }
  })
}
function code() {
  open(location, '_self').close();
}
