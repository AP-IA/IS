window.onload = function () {
    chrome.storage.sync.get('page', function (page) {
        if (page.page == 1) {
            var data = Array();
            for (var i = 12; i <= 14; i++) {

                data.push(document.getElementsByClassName('text_gray')[i - 11].innerHTML)
                var s = document.getElementsByTagName('li')[i].innerHTML;
                var st = "";
                for (var j = 0; j < s.length; j++) {
                    st = st.concat(s[j]);
                    if (s[j] == '>')
                        st = "";
                }

                data.push(st);
            }
            for (var i = 6; i <= 11; i++) {
                
                data.push(document.getElementsByTagName('span')[i].innerHTML)
            }
            data.push("关注数")
            data.push(document.getElementById('following_count').innerHTML)
            data.push("粉丝数")
            data.push(document.getElementById('follower_count').innerHTML)
           
           
            chrome.storage.sync.set({ 'user': data })
            chrome.storage.sync.get('cnblogname', function (budget) {
                var cnblogurl2 = "https://www.cnblogs.com/" + budget.cnblogname + "/";
                window.open(cnblogurl2)
            })
        }
    })

}