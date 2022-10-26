window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data = document.getElementsByTagName('pre')[0].innerHTML;
            
            chrome.storage.sync.set({ 'shiping': data });
            chrome.storage.sync.get('bilibiliUID', function (budget) {
                var url2 = "https://api.bilibili.com/x/space/acc/info?mid=" + budget.bilibiliUID + "&jsonp=jsonp";
                window.open(url2)
                setTimeout(code, 400)
            })
        }
    })

}
function code() {
    open(location, '_self').close();
}

