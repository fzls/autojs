var common = require("_common.js")

common.init("微信dnf签到活动自动化脚本")

common.launchPackage("打开微信", "com.tencent.mm")

common.log("先确保跳到首页")
for (let i = 0; i < 5; i++) {
    common.click("点击左上角返回键", 50, 135)
}
common.click("点击 [微信] tab", 140, 2075)
common.double_click("双击跳到最上方", 50, 135)
common.click_text("点击 [文件助手] 对话框", "文件传输助手")

common.headline("每日签到")
common.click_text("点击 [签到页面] 聊天记录", "每日签到")
// 为了保险起见，多点几次
for (let i = 0; i < 3; i++) {
    common.click("第" + i + "次点击 [签到] 按钮", 535, 1370)
}
common.back()

common.headline("2020DNF嘉年华派送好礼（TODO：确认是否必须要先去公众号回复 盖楼 才能领取）")
common.click_text("点击 [领取奖励] 聊天记录", "领取奖励")
// 为了保险起见，多点几次
for (let i = 0; i < 3; i++) {
    common.click("第" + i + "次点击 [领取奖励] 按钮", 535, 1570)
}
common.back()

common.foot()
