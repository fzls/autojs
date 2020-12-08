var common = require("_common.js")

common.init("掌上WeGame 每日签到与明日宝藏脚本")

common.launchPackage("打开掌上WeGame", "com.tencent.tgp")
common.sleep_default()
// common.click("点击 [屏幕中央] 以进入可能存在的开屏推送", 500, 1400)
// common.back()

common.headline("进入福利中心进行自动签到")
common.click("点击 [首页] tab", 135, 2080)
common.click("点击 [福利中心] 图标", 1015, 130)
common.sleep_default_with_msg("签到信息：" + id("tv_sign_result").findOne().text())

common.headline("限时兑换1-5Q币")
common.click("点击 [限时兑换] 图标", 200, 835)
common.sleep_default()
common.click("点击 [300积分兑换] 1Q币", 800, 725)
common.click("点击 [确定] 按钮", 540, 1320)
common.click("点击 [1500积分兑换] 5Q币", 800, 1120)
common.click("点击 [确定] 按钮", 540, 1320)
common.back()

common.headline("明日宝藏")
common.click("点击 [明日宝藏] 图标", 1070, 835)
common.headline("参与领取昨日参与的宝藏")
// re：需要等周三看看实际是什么样子再实现这个
common.sleep_default_with_msg("TODO：需要等周三看看实际是什么样子再实现这个")
common.headline("参与明日的宝藏")
common.click("点击 [我要参加] 按钮", 790, 1420)
// 通过我的积分来向上跳三层找到表格组件
formDialogView = className("android.view.View").text("我的积分 ：").findOne().parent().parent().parent()
let currentScores = parseInt(formDialogView.child(0).child(1).child(1).text(), 10)
let maxUseScore = Math.min(currentScores, 1000)
common.sleep_default_with_msg("当前积分为：" + currentScores + "分")
formDialogView.child(0).child(2).child(1).setText(maxUseScore)
common.sleep_default_with_msg("投入积分(上限1000)：" + maxUseScore)
formDialogView.child(6).click()
common.sleep_default_with_msg("点击 [确定] 按钮 参与明日的宝藏活动")
common.click("点击 [确定] 按钮", 550, 1440)

common.back_to_top("返回首页", 2, 3000)

common.foot()
