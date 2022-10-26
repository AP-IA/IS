window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
          

            data = document.getElementsByTagName('pre')[0].innerHTML;
            chrome.storage.sync.set({ 'user': data });
            chrome.storage.sync.get('jianshuname', function (budget) {

                var jianshuurl2 = "https://www.jianshu.com/asimov/users/slug/" + budget.jianshuname + "/public_notes";
                window.open(jianshuurl2)
                setTimeout(code, 400)
            })
        }
    })
}
function code() {
    open(location, '_self').close();
}