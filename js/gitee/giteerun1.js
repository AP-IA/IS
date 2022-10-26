window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data = document.getElementsByTagName('pre')[0].innerHTML;
          
            chrome.storage.sync.set({ 'user': data });

            chrome.storage.sync.get('gitee', function (budget) {
                var url2 = "https://gitee.com/api/v5/repos/" + budget.gitee + "/fe-daily-question/issues";
                window.open(url2)
                setTimeout(code, 400)
                

            })
        }
    })
}
function code() {
    open(location, '_self').close();
}

