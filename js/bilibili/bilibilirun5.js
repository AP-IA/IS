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
            chrome.storage.sync.get('bilibiliUID', function (budget) {
              var regex = /"id":.*?,/g
              var regex2 = /[^0-9]/g
              var regex3 = /"media_count":.*?}/g
              for (var i = 0; i < 50; i++) {
                var num=data1.match(regex3)[i].replace(regex2, "")/20;
                num=parseInt(num)+1
               
                if (data1.match(regex)[i] == undefined)
                  break;
                  for(var j=0;j<num;j++)
                  {
                    var url2 = "https://api.bilibili.com/x/v3/fav/resource/list?media_id="+data1.match(regex)[i].replace(regex2, "")+"&pn="+j+"&ps=20&keyword=&order=mtime&type=0&tid=0&platform=web&jsonp=jsonp"
                    window.open(url2)
                  }
                
                
              }
              setTimeout(code, 400)
            })
        }
      }
    })
  }
  function code() {
    open(location, '_self').close();
  }
  