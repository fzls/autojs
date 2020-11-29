// 微信dnf签到活动自动化脚本
var common = require("_common.js")

common.init()

common.log("打开微信")
launchApp("微信")
common.sleep_default()


common.log("先确保跳到首页")
for (let i = 0; i < 5; i++) {
    click(50, 135)
    sleep(1000)
}

common.log("点击 [微信] tab")
click(140, 2075)
common.sleep_default()

common.log("双击跳到最上方")
click(50, 135)
click(50, 135)
common.sleep_default()

common.log("点击 [文件助手] 对话框")
click(500, 370)
common.sleep_default()

common.log("点击 [签到页面] 聊天记录")
click(450, 1870)
common.sleep_default()

// 为了保险起见，多点几次
for (let i = 0; i < 5; i++) {
    common.log("点击 [签到] 按钮")
    click(535, 1370)
    common.sleep_default()
}

// 运行完毕
common.log("操作完成，请看看是否签到完成了")
