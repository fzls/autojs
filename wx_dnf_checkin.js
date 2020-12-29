var common = require("_common.js")

let clickLeftTopBackButton = function (totalCount) {
    for (let i = 0; i < totalCount; i++) {
        common.click("点击左上角返回键", 50, 135)
    }
}

common.init("微信dnf公众号相关活动自动化脚本")

common.launchPackage("打开微信", "com.tencent.mm")

common.log("先确保跳到首页")
clickLeftTopBackButton(5)
common.click("点击 [微信] tab", 140, 2075)
common.double_click("双击跳到最上方", 50, 135)

// common.headline("每日签到")
// common.click_text("点击 [文件传输助手] 对话框", "文件传输助手")
// common.click_text("点击 [签到页面] 聊天记录", "每日签到")
// // 为了保险起见，多点几次
// for (let i = 0; i < 3; i++) {
//     common.click("第" + i + "次点击 [签到] 按钮", 535, 1370)
// }
// clickLeftTopBackButton(2)

common.headline("2020DNF嘉年华派送好礼")
common.click_text("点击 [地下城与勇士] 对话框", "地下城与勇士")
common.click("点击 左下角的 [文字输入] 按钮", 66, 2080)
// hack: 版本更新的时候需要调整这个id
let inputArea = className("android.widget.EditText").id("iy0").findOne()
inputArea.setText("盖楼")
common.sleep_default_with_msg("输入 盖楼")
common.click("点击 [发送] 按钮", 980, 2080)
common.back()
common.click_text("点击 [文件传输助手] 对话框", "文件传输助手")
common.click_text("点击 [领取奖励] 聊天记录", "领取奖励")
// 为了保险起见，多点几次
for (let i = 0; i < 3; i++) {
    common.click("第" + i + "次点击 [领取奖励] 按钮", 535, 1570)
    common.click("第" + i + "次点击 [确定] 按钮", 400, 1235)
}
clickLeftTopBackButton(2)

common.foot()
