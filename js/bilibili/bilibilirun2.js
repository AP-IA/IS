window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data = document.getElementsByTagName('pre')[0].innerHTML;
            chrome.storage.sync.set({ 'user': data });
            chrome.storage.sync.get('bilibiliUID', function (budget) {

                var url3 = "https://api.bilibili.com/x/space/arc/search?mid=" + budget.bilibiliUID + "&jsonp=jsonp";
                window.open(url3)
                setTimeout(code, 400)
            })

        }
    })
}
function code() {
    open(location, '_self').close();
}

