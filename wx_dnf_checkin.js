let common = require("_common.js")

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

common.headline("微信答题")
common.click_text("点击 [地下城与勇士] 对话框", "地下城与勇士")
let switchToTextInputBtn = className("android.widget.ImageView").desc("消息").findOne()
common.click("点击 左下角的 [文字输入] 按钮", switchToTextInputBtn.bounds().centerX(), switchToTextInputBtn.bounds().centerY())
// hack: 版本更新的时候需要调整这个id
let inputArea = className("android.widget.ImageView").desc("服务按钮").findOne() // 左下角按钮 ImageView
    .parent().parent() // 最下方tab容器 LinearLayout
    .child(1) // 除左下角按钮外的右侧控件的容器 LinearLayout
    .child(1) // 中间控件容器 LinearLayout
    .child(0) // ScrollView
    .child(0) // LinearLayout
    .child(0) // FrameLayout
    .child(0) // EditText

let possibleAnswers = ["dta", "dtb", "dtc", "dtd"]
for (let idx = 0; idx < possibleAnswers.length; idx++) {
    answer = possibleAnswers[idx]

    inputArea.setText(answer)
    common.sleep_default_with_msg("输入 " + answer)

    let sendBtn = className("android.widget.Button").text("发送").findOne()
    common.click("点击 [发送] 按钮", sendBtn.bounds().centerX(), sendBtn.bounds().centerY())
}
common.back()
common.click_text("点击 [文件传输助手] 对话框", "文件传输助手")
common.click_text("点击 [抽奖] 聊天记录", "抽奖")
// 为了保险起见，多点几次
for (let i = 1; i <= 3; i++) {
    common.click("第" + i + "次点击 [抽奖] 按钮", 545, 1770)
    common.click("第" + i + "次点击 [确定] 按钮", 400, 1235)
}
clickLeftTopBackButton(2)

common.foot()
