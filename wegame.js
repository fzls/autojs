var common = require("_common.js")

common.init("掌上WeGame 每日签到与明日宝藏脚本")

common.launchPackage("打开掌上WeGame", "com.tencent.tgp")
common.click("点击 [首页] tab以跳过开屏推送", 135, 2080)

common.headline("进入福利中心进行自动签到")
common.click("点击 [首页] tab", 135, 2080)
common.click("点击 [福利中心] 图标", 1015, 130)
common.sleep_default_with_msg("签到信息：" + id("tv_sign_result").findOne().text())

common.headline("限时兑换1-5Q币")
common.click("点击 [限时兑换] 图标", 200, 511)
common.sleep_default()
common.click("点击 [300积分兑换] 1Q币", 800, 725)
common.click("点击 [确定] 按钮", 540, 1320)
common.click("点击 [1500积分兑换] 5Q币", 800, 1120)
common.click("点击 [确定] 按钮", 540, 1320)
common.back()

common.headline("明日宝藏")
common.click("点击 [明日宝藏] 图标", 1070, 511)
common.headline("进入后将自动领取昨日参与的宝箱，将在明天自动开启~")
common.headline("参与明日的宝藏")
common.click("点击 [我要参加] 按钮(无昨日宝箱)", 700, 1420)
common.click("点击 [我要参加] 按钮(有昨日宝箱)", 700, 1600)
common.click("点击 [空白处] 干掉输入框", 700, 1400)
// 通过我的积分来向上跳三层找到表格组件
formDialogView = className("android.view.View").text("我的积分 ：").findOne().parent().parent().parent()
let currentScores = parseInt(formDialogView.child(0).child(1).child(1).text(), 10)
let actualUseScore = Math.min(currentScores, 1000)
common.sleep_default_with_msg("当前积分为：" + currentScores + "分")
if (actualUseScore >= 10) {
    formDialogView.child(0).child(2).child(1).setText(actualUseScore)
    common.sleep_default_with_msg("投入积分(上限1000)：" + actualUseScore)
    formDialogView.child(6).click()
    common.sleep_default_with_msg("点击 [确定] 按钮 参与明日的宝藏活动")
    common.click("点击 [确定] 按钮", 550, 1440)
} else {
    common.sleep_default_with_msg("当前积分为" + actualUseScore + "分，参与活动至少需要10分~")
}

common.back_to_top("返回首页", 2, 3000)

common.foot()
