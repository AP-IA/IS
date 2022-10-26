
window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            
            let data = document.getElementsByTagName('pre')[0].innerHTML;
            chrome.storage.sync.set({ 'followers': data });
            
            chrome.storage.sync.get('githubname', function (budget) {
                var githuburl4 = "https://api.github.com/users/" + budget.githubname + "/repos";
                window.open(githuburl4)
                setTimeout(code, 400)

            })
        }
    })

}
function code() {
    open(location, '_self').close();
  }
