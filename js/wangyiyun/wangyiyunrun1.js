window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data = document.getElementsByTagName('pre')[0].innerHTML;
           
            chrome.storage.sync.set({ 'user': data });
            chrome.storage.sync.get('wyy', function (budget) {
                var url2 = "http://music.163.com/api/user/playlist/?offset=0&limit=100&uid=" + budget.wyy;
                window.open(url2)
                

            })
        }
    })
}
