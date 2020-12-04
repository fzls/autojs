var common = require("_common.js")

common.init("hello语音dnf活动自动化脚本")

common.launchPackage("打开hello语音", "com.yy.huanju")
common.back_to_top("按多次back，确保跳到最顶层", 5, 3000)

common.headline("进入活动界面")
common.click("点击 [首页] Tab", 105, 2050)
common.click("点击 [游戏] 分页", 78, 160)
common.click_sleep_long("点击 [福利中心]", 310, 800)
common.click("点击 [使用Hello贝]", 800, 670)

common.headline("投票助力")
common.click_sleep_long("点击 [阿拉德勇士征集令]", 530, 1000)
common.click("点击 [投票助力领好礼]", 280, 1210)
common.swipe("上滑直至[为跨区助力解锁豪华大礼]处于页面最上方", 550, 1950, 550, 848, 1000)
common.click("点击 [跨6] 图标", 440, 1040)
common.click("点击 [立即投票]", 540, 1275)
common.swipe("上滑直至[累积投票游戏福利每天领]处于页面最上方", 550, 1950, 550, 680, 1000)
common.click("点击 [领取] 累积投票3次", 895, 730)
common.click("点击 [领取] 累积投票7次", 895, 1070)
common.click("点击 [领取] 累积投票15次", 895, 1410)
common.click("点击 [领取] 累积投票20次", 895, 1750)
common.back() // 回到上一层以方便后续操作

common.headline("签到、分享、抽奖")
common.click_sleep_long("点击 [阿拉德勇士征集令]", 530, 1000)
common.click("点击 [游戏福利天天送]", 800, 1210)
common.swipe("上滑直至[每日任务] 相关内容完整出现在页面下方", 550, 1750, 550, 390, 1000)
common.click("点击 [领取] 每日投票", 880, 1845)
common.click("点击 [去分享] 分享活动", 880, 2025)
common.click("点击 [QQ好友]", 900, 1760)
common.click("点击 [我的电脑]", 570, 988)
common.click("点击 [发送]", 745, 1500)
common.click("点击 [返还Hello语音]", 340, 1205)
for (let i = 0; i < 3; i++) {
    common.click_sleep_long("点击 [抽奖]", 540, 800)
    common.click("点击 [确定] 以跳过抽奖成功提示", 755, 1330)
    common.click("点击 [确定] 以跳过抽奖次数不足提示", 540, 1270)
}
common.back() // 回到上一层以方便后续操作

common.back_to_top("返回首页", 2, 3000)

common.foot()
