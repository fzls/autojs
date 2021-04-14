let common = require("_common.js")

common.init("基于手机QQ做的网页活动")

common.reLaunchPackage("重新打开QQ", "com.tencent.mobileqq")

common.headline("预购活动每日免费抽奖")

// QQ暂时没找到直接定位一个对话框的法子，换一个思路，改为从搜索栏入手
common.sleep("重新打开QQ需要等待半分钟，等待必要内容加载完毕，否则搜索功能会没有结果", 60)
let searchBar = className("android.widget.TextView").text("搜索").findOne()
common.click("点击 [搜索] 框", searchBar.bounds().centerX(), searchBar.bounds().centerY())
common.back()

let newSearchEdit = className("android.widget.EditText").text("搜索").findOne()
newSearchEdit.setText("我的电脑")
common.sleep("搜索 [我的电脑]，需要耗费一些时间，等待若干时间", 30)

let myComputer = className("android.widget.TextView").text("我的电脑").findOne()
common.click("点击 [我的电脑] 对话框", myComputer.bounds().centerX(), myComputer.bounds().centerY())

let activityUrlTextView = className("android.widget.TextView").text("https://pay.qq.com/h5/activity/dnf_dqgylb_lottery.php").findOne()
common.click("点击 [预购活动链接] 聊天记录", activityUrlTextView.bounds().centerX(), activityUrlTextView.bounds().centerY())

common.swipe("1/2 上滑直至[领取抽奖券]界面完全展现", 540, 2000, 540, 300, 1000)
common.swipe("2/2 上滑直至[领取抽奖券]界面完全展现", 540, 2000, 540, 300, 1000)

let takeDailyLoginTicketBtn = className("android.view.View").text("每日登录抽奖券×1").findOne().parent().parent().child(2)
common.click("点击 [立即领取] 每日登录抽奖券×1", takeDailyLoginTicketBtn.bounds().centerX(), takeDailyLoginTicketBtn.bounds().centerY())
common.click_text("点击 [确定]", "确定")

let takeLuckyTicketBtn = className("android.view.View").text("幸运用户抽奖券×1").findOne().parent().parent().child(2)
common.click("点击 [立即领取] 幸运用户抽奖券×1", takeLuckyTicketBtn.bounds().centerX(), takeLuckyTicketBtn.bounds().centerY())
common.click_text("点击 [确定]", "确定")

common.swipe("1/2 上滑直至[抽奖界面]界面完全展现", 540, 2000, 540, 300, 1000)

// 为了保险起见，多点几次
for (let i = 0; i < 3; i++) {
    common.click("第" + (i+1) + "次点击 [立即开奖] 按钮", 550, 1100)
    common.sleep_default_with_msg("额外等待一会，确保抽奖动画完毕")
    common.click("第" + (i+1) + "次点击 [关闭奖励展示] 按钮（可能需要调整）", 550, 1405)
}

common.back_to_top("跳回主界面", 3, 3000)

common.foot()
