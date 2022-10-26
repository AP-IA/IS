
window.onload = function () {
  chrome.storage.sync.get('page', function (page) {
    if (page.page == 1) {
     
      let data = document.getElementsByTagName('pre')[0].innerHTML;
      chrome.storage.sync.set({ 'following': data });
      
      chrome.storage.sync.get('githubname', function (budget) {
        var githuburl3 = "https://api.github.com/users/" + budget.githubname + "/followers";
        window.open(githuburl3)
        setTimeout(code, 400)

      })
    }
  })

}
function code() {
  open(location, '_self').close();
}
