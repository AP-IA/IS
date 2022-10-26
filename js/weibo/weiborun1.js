window.onload = function () {
    setTimeout(code, 1000)
}
function code() {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data="";
            var all = document.getElementsByClassName('detail_wbtext_4CRf9');
           // console.log(all.item(0).innerHTML)
            for(var i=0;i<all.length;i++)
            {

                data+=all.item(i).innerHTML+'\n';
              //  console.log(data)
            }
          
            chrome.storage.sync.set({ 'user': data });
            chrome.storage.sync.get('weibo', function (budget) {
                var url2 = "https://weibo.com/u/page/fav/"+budget.weibo;
                window.open(url2)
                

             })
        }
    })
  }
