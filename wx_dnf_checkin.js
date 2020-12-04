var common = require("_common.js")

common.init("微信dnf签到活动自动化脚本")

common.launchPackage("打开微信", "com.tencent.mm")

common.log("先确保跳到首页")
for (let i = 0; i < 5; i++) {
    common.click("点击左上角返回键", 50, 135)
}
common.click("点击 [微信] tab", 140, 2075)
common.double_click("双击跳到最上方", 50, 135)
common.click("点击 [文件助手] 对话框", 500, 370)
common.click("点击 [签到页面] 聊天记录", 450, 1870)
// 为了保险起见，多点几次
for (let i = 0; i < 5; i++) {
    common.click(i + ". 点击 [签到] 按钮", 535, 1370)
}

common.foot()
