let common = require("_common.js")

common.init("dnf助手自动完成编年史相关任务脚本")

common.reLaunchPackage("重新打开 助手app", "com.tencent.gamehelper.dnf")

common.headline("阅读资讯")
common.click("点击 [资讯] tab", 140, 2080)
common.click("点击 [精选] 分页", 88, 244)
common.click("点击 [第一条资讯]", 650, 1150)
common.back_to_top("返回首页", 2, 3000)

common.headline("阅读视频资讯")
common.click("点击 [资讯] tab", 140, 2080)
common.log("视频分页在屏幕外面，所以需要先用 关注 中转一下")
common.click("点击 [关注] 分页", 965, 244)
common.click("点击 [视频] 分页", 715, 244)

let commentBtns = className("android.widget.TextView").id("info_coment_count").find()
for (let i=0; i< commentBtns.length;i++) {
    let commentBtn = commentBtns[i]
    titleTextView = commentBtn.parent().parent().parent().parent().parent().child(0)
    if (commentBtn.text() !== "" && titleTextView.text() !== "") {
        commentBtn.click()
        common.sleep_default_with_msg("点击 [某条视频资讯评论按钮以进入详情页]，视频标题为【" + titleTextView.text() + "】")
        break
    }
}

common.back_to_top("返回首页", 2, 3000)
common.log("需要额外点击分页以回到最初分页，确保后续执行初始状态一致")
common.click("点击 [百科] 分页", 110, 244)
common.click("点击 [作品] 分页", 365, 244)
common.click("点击 [精选] 分页", 88, 244)

common.headline("阅读动态")
common.click("点击 [动态] tab", 400, 2080)
common.click("点击 [第一条动态]", 650, 1150)
common.back_to_top("返回首页", 2, 3000)

common.headline("访问他人主页并关注社区好友")
common.click("点击 [动态] tab", 400, 2080)
common.click("点击 [第一条动态的发送者头像] 以进入其主页", 95, 1050)
common.click("点击 [加好友] 关注他", 1000, 345)
common.click("点击 [...] 打开选项框", 1013, 138)
common.click_text("点击 [删除好友] 取消关注", "删除好友")
common.back_to_top("返回首页", 2, 3000)

common.headline("分享周报")
common.click("点击 [我的] tab", 940, 2080)
common.click("点击 [游戏数据/周报] 图标", 165, 1920)
common.sleep_default_with_msg("额外等待一会")
common.swipe("下滑到第4页", 540, 600, 540, 1600, 1000)
common.click_text("点击 [立即分享]", "立即分享")
common.click("点击 [空白处] 跳回，无需实际分享", 725, 1100)
// common.click("点击 [QQ好友]", 620, 1818)
// common.sleep_default_with_msg("等待几秒后，直接返回即可，无需实际分享")
// common.back()
// common.click_text("点击 [小号群]", "小号群")
// common.click("点击 [发送]", 745, 1580)
// common.click("点击 [返回DNF助手]", 340, 1205)
for (let i = 1; i <= 6; i++) {
    common.click("第" + i + "次点击 [空白处] 以避免多次分享的bug", 725, 1100)
}
common.back_to_top("返回首页", 2, 3000)

common.foot()
