// dnf助手排行榜活动自动化获取鲜花脚本
var common = require("autojs/_common.js")

common.init()

log("登录助手app")
launchPackage("com.tencent.gamehelper.dnf")
sleep(5000)

common.log("退出当前应用")
common.exit_current_app()
sleep(3000)

common.log("重新打开app，从而确保在首页")
launchPackage("com.tencent.gamehelper.dnf")
sleep(5000)

common.log("--阅读资讯--")
common.log("点击 [资讯] tab")
click(140, 2080)
sleep(1000)
common.log("点击 [第一条资讯]")
click(650, 1150)
sleep(1000)
common.log("回到主页")
back()
common.sleep_default()

common.log("--阅读动态--")
common.log("点击 [动态] tab")
click(400, 2080)
sleep(1000)
common.log("点击 [第一条动态]")
click(650, 1150)
sleep(1000)
common.log("回到主页")
back()
common.sleep_default()

common.log("访问他人主页并关注社区好友")
// 访问主页
common.log("点击 [动态] tab")
click(400, 2080)
sleep(1000)
common.log("点击 [第一条动态的发送者头像] 以进入其主页")
click(95, 1050)
sleep(1000)
// 关注，并取消关注，方便后续关注能顺利进行
common.log("点击 [加好友] 关注他")
click(1000, 345)
sleep(1000)
common.log("点击 [...] 打开选项框")
click(1013, 138)
sleep(1000)
common.log("点击 [删除好友] 取消关注")
click(540, 1838)
sleep(1000)
common.log("回到主页")
back()
common.sleep_default()

// 运行完毕
common.log("操作完成，请看看是否ok")
