window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            
            var data = document.getElementsByTagName('pre')[0].innerHTML;
            chrome.storage.sync.set({ 'user': data });
           
            chrome.storage.sync.get('flag', function (budget) {
                if (budget.flag == 1) {
                    chrome.storage.sync.get('githubname', function (budget) {
                        var githuburl2 = "https://api.github.com/users/" + budget.githubname + "/following";
                        window.open(githuburl2)
                        setTimeout(code, 400)

                    })
                    chrome.storage.sync.set({ 'flag': 0 });

                }
            })
        }
    })
}
function code() {
    open(location, '_self').close();
  }
