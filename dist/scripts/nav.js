define(["jquery"], function($) {
    function downloadBanner() {
        // 取轮播图片数据
        $.ajax({
            url: "../json/nav.json",
            success: function(obj) {
                var bannerArr = obj.banner;
                // alert(bannerArr.length);
                for (var i = 0; i < bannerArr.length; i++) {
                    // 插入轮播图片
                    $(`<a href="#" style="display:${i == 0 ? "block" : "none"}">
                        <img src="images/${bannerArr[i].img}" alt="广告一" />
                    </a>`).appendTo($("#banner .banner"));
                    // 插入轮播图按钮节点
                    var node = $(`<li class="${i == 0 ? "dots-active" : ""}"></li>`);
                    node.appendTo($("#banner .dots ul"));
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }

    // small-show
    function smallShow() {
        // 取出图片数据
        $.ajax({
            url: "../json/smallshow.json",
            success: function(obj) {
                var smallshowArr = obj.smallshow;
                // alert(smallshowArr.length);
                for (var i = 0; i < smallshowArr.length; i++) {
                    var node = $(`<a href=""><img src="${smallshowArr[i].img}" alt=""></a>`);
                    node.appendTo("#container .small-banner");
                }
            }
        })
    }

    // ranking 排行榜

    function rankingShow() {
        $.ajax({
            url: "../json/ranking.json",
            success: function(obj) {
                var rankingArr = obj.ranking;
                // alert(rankingArr.length);
                for (var i = 0; i < rankingArr.length; i++) {
                    $(`<li class = "li">
                        <img src="${rankingArr[i].img}" alt="">
                        <div>${rankingArr[i].desc}</div>
                        <span>${rankingArr[i].tip}</span>
                    </li>`).appendTo("#rankingbox .bottom");
                }
            }
        })
    }
    return {
        downloadBanner: downloadBanner,
        smallShow: smallShow,
        rankingShow: rankingShow
    }
})