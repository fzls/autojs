let common = require("_common.js")

common.init("基于手机QQ做的网页活动")

common.reLaunchPackage("重新打开QQ", "com.tencent.mobileqq")

common.headline("预购活动每日免费抽奖")

// QQ暂时没找到直接定位一个对话框的法子，换一个思路，改为从搜索栏入手
let searchBar = className("android.widget.TextView").text("搜索").findOne()
common.click("点击 [搜索] 框", searchBar.bounds().centerX(), searchBar.bounds().centerY())
common.back()

let newSearchEdit = className("android.widget.EditText").text("搜索").findOne()
newSearchEdit.setText("我的电脑")
common.sleep_default_with_msg("搜索 [我的电脑]")

let myComputer = className("android.widget.TextView").text("我的电脑").findOne()
common.click("点击 [我的电脑] 对话框", myComputer.bounds().centerX(), myComputer.bounds().centerY())

let activityUrlTextView = className("android.widget.TextView").text("https://pay.qq.com/h5/active/pay_lottery_stage_dnf20210107.php").findOne()
common.click("点击 [预购活动链接] 聊天记录", activityUrlTextView.bounds().centerX(), activityUrlTextView.bounds().centerY())

common.swipe("1/2 上滑直至[抽奖界面]界面完全展现", 540, 2000, 540, 300, 1000)
common.swipe("2/2 上滑直至[抽奖界面]界面完全展现", 540, 2000, 540, 300, 1000)


// 为了保险起见，多点几次
for (let i = 0; i < 3; i++) {
    common.click("第" + (i+1) + "次点击 [立即开奖] 按钮", 550, 1050)
    common.click("第" + (i+1) + "次点击 [关闭奖励展示] 按钮", 990, 845)
}

common.foot()
