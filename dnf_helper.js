let common = require("_common.js")

common.init("dnf助手排行榜活动自动化完成获取鲜花任务以及编年史相关任务脚本")

common.launchPackage("打开助手app并等待一段时间", "com.tencent.gamehelper.dnf")
common.back_to_top("按多次back，确保跳到最顶层", 5, 3000)

common.headline("阅读资讯")
common.click("点击 [资讯] tab", 140, 2080)
common.click("点击 [推荐] 分页", 88, 244)
common.click("点击 [第一条资讯]", 650, 1150)
common.back_to_top("返回首页", 2, 3000)

common.headline("阅读视频资讯")
common.click("点击 [资讯] tab", 140, 2080)
common.click("点击 [视频] 分页", 788, 244)

let commentBtns = className("android.widget.TextView").id("info_coment_count").find()
for (let i=0; i< commentBtns.length;i++) {
    let commentBtn = commentBtns[i]
    titleTextView = commentBtn.parent().parent().parent().parent().parent().child(0)
    if (commentBtn.text() != "" && titleTextView.text() != "") {
        commentBtn.click()
        common.sleep_default_with_msg("点击 [某条视频资讯评论按钮以进入详情页]，视频标题为【" + titleTextView.text() + "】")
        break
    }
}

common.back_to_top("返回首页", 2, 3000)
common.log("需要额外点击分页以回到最初分页，确保后续执行初始状态一直")
common.click("点击 [作品] 分页", 50, 244)
common.click("点击 [推荐] 分页", 88, 244)

common.headline("阅读动态")
common.click("点击 [动态] tab", 400, 2080)
common.click("点击 [第一条动态]", 650, 1150)
common.back_to_top("返回首页", 2, 3000)

common.headline("访问他人主页并关注社区好友")
common.click("点击 [动态] tab", 400, 2080)
common.click("点击 [第一条动态的发送者头像] 以进入其主页", 95, 1050)
common.click("点击 [加好友] 关注他", 1000, 345)
common.click("点击 [...] 打开选项框", 1013, 138)
common.click("点击 [删除好友] 取消关注", 540, 1838)
common.back_to_top("返回首页", 2, 3000)

common.headline("分享周报")
common.click("点击 [三横杠] 进入左侧栏", 67, 140)
common.click("点击 [新周报-体验版] 进入周报", 500, 980)
common.sleep_default_with_msg("额外等待一会")
common.swipe("下滑到第4页", 540, 600, 540, 1600, 1000)
common.click("点击 [立即分享]", 725, 1495)
common.click("点击 [QQ好友]", 620, 1818)
common.click("点击 [我的电脑]", 570, 988)
common.click("点击 [发送]", 745, 1500)
common.click("点击 [返回DNF助手]", 340, 1205)
for (let i = 1; i <= 6; i++) {
    common.click("第" + i + "次点击 [空白处] 以避免多次分享的bug", 725, 1100)
}
common.back_to_top("返回首页", 2, 3000)

common.foot()
