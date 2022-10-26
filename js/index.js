window.onload = function () {
    chrome.storage.sync.set({ 'page': 1 });
    $('#github').click(function () {
        var githubname = prompt("请输入用户名");
        if (githubname) {
            chrome.storage.sync.set({ 'githubname': githubname });
            chrome.storage.sync.set({ 'flag': 1 });
            var githuburl1 = "https://api.github.com/users/" + githubname;
            
            window.open(githuburl1)

            
        }

    })


    $('#jianshu').click(function () {
        var jianshu = prompt("请输入用户的主页链接");
        if (jianshu) {
            var jianshuname = "";
            var j = 0;
            for (var i = 0; i < jianshu.length; i++) {
                jianshuname = jianshuname.concat(jianshu[i]);
                if (jianshu[i] == '/') {
                    jianshuname = "";
                }
            }
            chrome.storage.sync.set({ 'jianshuname': jianshuname });
            var jianshuurl1 = "https://www.jianshu.com/asimov/users/slug/" + jianshuname;
            var jianshuurl2 = "https://www.jianshu.com/asimov/users/slug/" + jianshuname + "/public_notes";
            window.open(jianshuurl1);
        }

    })


    $('#cnblog').click(function () {
        var cnblog = prompt("请输入用户的博客来链接");
        if (cnblog) {
            var cnblogname = "";
            var j = "";

            for (var i = 0; i < cnblog.length; i++) {
                cnblogname = cnblogname.concat(cnblog[i]);
                if (cnblog[i + 1] == '/') {

                    j = cnblogname;
                    
                    cnblogname = "";
                    i++;
                }
            }
            
            chrome.storage.sync.set({ 'cnblogname': j });
            var cnblogurl1 = "https://home.cnblogs.com/u/" + j + "/";
            window.open(cnblogurl1);
        }

    })

    $('#oschina').click(function () {
        var oschina = prompt("请输入用户的博客链接");
        if (oschina) {
            var oschinaname = "";
            var j = "";
            for (var i = 0; i < oschina.length; i++) {
                oschinaname = oschinaname.concat(oschina[i]);
                j = oschinaname;
                if (oschina[i + 1] == '/') {

                    oschinaname = "";
                    i++;
                }
            }
            
            
            chrome.storage.sync.set({ 'oschinaname': j });
            var oschinaurl1 = "https://my.oschina.net/u/" + j + "/";
            window.open(oschinaurl1);
        }

    })


    $('#bilibili').click(function () {
        var bilibiliUID = prompt("请输入用户的UID");
        if (bilibiliUID) {
            chrome.storage.sync.set({ 'index1': 2 })
            chrome.storage.sync.set({ 'index2': 2 })
            chrome.storage.sync.set({ 'bilibiliUID': bilibiliUID });
            var url = "https://api.bilibili.com/x/relation/stat?vmid=" + bilibiliUID + "&jsonp=jsonp";
            window.open(url)
            
        }

    })

    $('#zhihu').click(function () {
        if (confirm("是否登录已登录了知乎") == true) {
            
            var url = "https://www.zhihu.com/api/v4/me";
            window.open(url)
            return true;
        } else {
            alert("请先登录知乎")
            return false;
        }

    })

    $('#gitee').click(function () {
        var gitee = prompt("请输入用户名");
        if (gitee) {
            chrome.storage.sync.set({ 'gitee': gitee });
            var url = "https://gitee.com/api/v5/users/" + gitee;
            window.open(url)
        }


    })

    $('#wangyiyun').click(function () {
        var wyy = prompt("请输入用户id");
        if (wyy) {
            chrome.storage.sync.set({ 'wyy': wyy });
            var url = "https://music.163.com/api/v1/user/detail/" + wyy;
            window.open(url)
        }


    })


    $('#QQ').click(function () {
        var QQ = prompt("请输入QQ账号");
        if (QQ) {
            var url = "tencent://ContactInfo/?subcmd=ViewInfo&puin=0&uin=" + QQ;
            window.open(url)
        }


    })

    $('#CSDN').click(function () {

        var csdn = prompt("请输入用户名ID");
        if (csdn) {
            chrome.storage.sync.set({ 'csdn': csdn });
        }
        else{
            return false
        }

        

    })

    $('#lately').click(function () {
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-tab-total?username=" + budget.csdn;
            window.open(url)
        })
    })

    $('#blog').click(function () {
        chrome.storage.sync.set({ 'index2': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=blog&orderby=&noMore=false&year=&month=&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#download').click(function () {
        chrome.storage.sync.set({ 'index3': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=download&noMore=false&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#askAnswer').click(function () {
        chrome.storage.sync.set({ 'index4': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=askAnswer&noMore=false&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#askQuestion').click(function () {
        chrome.storage.sync.set({ 'index5': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=askQuestion&noMore=false&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#communityPost').click(function () {
        chrome.storage.sync.set({ 'index6': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=communityPost&noMore=false&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#communityTopic').click(function () {
        chrome.storage.sync.set({ 'index7': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-business-list?page=1&size=20&businessType=communityTopic&noMore=false&username=" + budget.csdn;
            window.open(url)
        })
    })
    $('#collect').click(function () {
        chrome.storage.sync.set({ 'index8': 2 })
        chrome.storage.sync.get('csdn', function (budget) {
            var url = "https://blog.csdn.net/community/home-api/v1/get-favorites-created-list?page=1&size=20&noMore=false&blogUsername=" + budget.csdn;
            window.open(url)
        })
    })

    $('#taobao').click(function () {
        if (confirm("是否登录已登录了淘宝") == true) {
           
            return true;
        } else {
            alert("请先登录淘宝")
            return false;
        }
    })
    $('#bought_shops').click(function () {
        chrome.storage.sync.set({ 'index1': 6 })
        var url = "https://favorite.taobao.com/nodejs/list_bought_shops_n.htm?ifAllTag=0&tab=0&categoryCount=0&type=0&tagName=&categoryName=&needNav=false&startRow=0&t=1665586139739";
        window.open(url)

    })
    $('#shop_collect').click(function () {
        chrome.storage.sync.set({ 'index2': 6 })
        var url = "https://favorite.taobao.com/nodejs/shop_collect_list_chunk.htm?ifAllTag=0&tab=0&categoryCount=0&tagName=&type=0&categoryName=&needNav=false&startRow=0&t=1665587010654";
        window.open(url)
    })
    $('#item_collect').click(function () {
        chrome.storage.sync.set({ 'index3': 30 })
        var url = "https://favorite.taobao.com/nodejs/item_collect_chunk.htm?ifAllTag=0&tab=0&tagId=&categoryCount=0&type=0&tagName=&categoryName=&needNav=false&startRow=0&t=1665663153743";
        window.open(url)
    })
    $('#txsp').click(function () {
        if (confirm("是否登录已登录了腾讯视频") == true) {
            
            var url = "https://v.qq.com/biu/u/history/";
            window.open(url)
            return true;
        } else {
            alert("请先登录腾讯视频")
            return false;
        }

    })
    $('#mgtv').click(function () {
        if (confirm("是否登录已登录了芒果tv") == true) {
            
            var url = "https://i.mgtv.com/my/watch";
            window.open(url)
            return true;
        } else {
            alert("请先登录芒果tv")
            return false;
        }

    })
    $('#qiy').click(function () {
        if (confirm("是否登录已登录了爱奇艺") == true) {
            
            var url = "https://www.iqiyi.com/u/record";
            window.open(url)
            return true;
        } else {
            alert("请先登录爱奇艺")
            return false;
        }
    })
    $('#sohu').click(function () {
        if (confirm("是否登录已登录了搜狐视频") == true) {
            
            var url = "https://my.tv.sohu.com/i/history";
            window.open(url)
            return true;
        } else {
            alert("请先登录搜狐视频")
            return false;
        }
    })
    $('#tieba').click(function () {
        if (confirm("是否登录已登录了贴吧") == true) {
            
            var url = "https://tieba.baidu.com/f/like/mylike?v=1666784";
            window.open(url)
            return true;
        } else {
            alert("请先登录贴吧")
            return false;
        }
    })
    $('#jingdong').click(function () {
        if (confirm("是否登录已登录了京东") == true) {
           
            var url = "https://order.jd.com/center/list.action?search=0&d=2&s=4096";
            window.open(url)
            return true;
        } else {
            alert("请先登录京东")
            return false;
        }
    })
    $('#weibo').click(function () {
        if (confirm("是否登录已登录了微博") == true) {
            var url = prompt("请输入微博空间的链接");

            var weibo=url.replace("https://weibo.com/u/",'');
            chrome.storage.sync.set({"weibo":weibo});
            url="https://weibo.com/u/"+weibo+"?tabtype=feed";
            window.open(url)
            return true;
        } else {
            alert("请先登录微博")
            return false;
        }

    })

}