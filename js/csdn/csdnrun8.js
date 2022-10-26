window.onload = function () {


  chrome.storage.sync.get('page', function (page) {
    if (page.page==1) {
      var data1 = document.getElementsByTagName('pre')[0].innerHTML;
      var index = data1.indexOf("\"list\":");


      if (data1[index + 7] == '[' && data1[index + 8] == ']') {
        chrome.storage.sync.set({ 'page': 0 })
        setTimeout(code, 400)
      }
      else {
        
        chrome.storage.sync.get('index8', function (budget1) {
          chrome.storage.sync.set({ 'index8': budget1.index8 + 1 })
          chrome.storage.sync.get('csdn', function (budget) {
            var regex = /"id":.*?,/g
            var regex2 = /[^0-9]/g
            for (var i = 0; i < 30; i++) {
              if (data1.match(regex)[i] == undefined)
                break;
              var url2 = "https://blog.csdn.net/community/home-api/v1/get-favorites-item-list?blogUsername=" + budget.csdn + "&folderId=" + data1.match(regex)[i].replace(regex2, "") + "&page=1&pageSize=400"
              window.open(url2)
             
            }
            var url1 = "https://blog.csdn.net/community/home-api/v1/get-favorites-created-list?page=" + budget1.index8 + "&size=20&noMore=false&blogUsername=" + budget.csdn;
            window.open(url1)
            setTimeout(code, 400)
          })
        })
      }
    }
  })
}
function code() {
  open(location, '_self').close();
}
