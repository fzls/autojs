var common = require("_common.js")

common.init("掌上WeGame 每日签到与明日宝藏脚本")

common.launchPackage("打开掌上WeGame", "com.tencent.tgp")
common.click("点击 [首页] tab以跳过开屏推送", 135, 2080)

common.headline("进入福利中心进行自动签到")
common.click("点击 [首页] tab", 135, 2080)
common.click("点击 [福利中心] 图标", 1015, 130)
common.sleep_default_with_msg("签到信息：" + id("tv_sign_result").findOne().text())

// 获取banner view，进而获取y轴信息
let bannerRecycleView = className("androidx.recyclerview.widget.RecyclerView").id("recyclerview_pm_banner").findOne()
let bannerY = bannerRecycleView.bounds().centerY()
common.sleep_default_with_msg("活动页面图标的Y轴中心为 " + bannerY)

let firstActivityXPosition = 150
let activityWidth = 350
let secondActivityPosition = firstActivityXPosition + activityWidth
let thirdActivityPosition = firstActivityXPosition + 2 * activityWidth
let processedActivities = []
let currentMyPoints = 0

// 点击前三个活动
let activityXPositions = [firstActivityXPosition, secondActivityPosition, thirdActivityPosition]
for (let i = 0; i < activityXPositions.length; i++) {
    currentMyPoints = parseInt(className("android.widget.TextView").id("tv_my_points").findOne().text(), 10)
    common.click("点击 第" + (i + 1) + "个 活动图标", activityXPositions[i], bannerY)
    doActivity()
}
// 点击后面几个活动。目前实际只有五个活动页面，为了保险起见，多处理俩
for (let i = 4; i <= 7; i++) {
    currentMyPoints = parseInt(className("android.widget.TextView").id("tv_my_points").findOne().text(), 10)
    common.swipe("向左滑动一个活动图标的距离，使下一个滑动滑动到当前最后一个活动的位置", thirdActivityPosition, bannerY, secondActivityPosition, bannerY, 1000)
    common.click("点击 第" + i + "个 活动图标", thirdActivityPosition, bannerY)
    doActivity()
}

// 统计一下处理的活动列表
common.sleep_default_with_msg("本次共处理了以下活动： " + processedActivities)

let tomorrowTreasureProcessed = false

// 根据当前活动页面title，决定不同的处理方式
function doActivity() {
    // 获取活动页面的title
    let title = className("android.widget.LinearLayout").id("actionbar_middle_container").findOne().child(0).text()

    if (processedActivities.indexOf(title) === -1) {
        processedActivities.push(title)

        common.sleep("当前页面标题为：" + title + " ，多等待一会，确保加载完毕", 10)

        switch (title) {
            case "福利中心-限时兑换":
                common.headline("限时兑换1-5Q币")
                // 兑换完对应Q币，须确保剩余积分不少于这个数
                needLeftAtLeast = 0
                if (!tomorrowTreasureProcessed) {
                    // 如果今天的明日宝藏尚未投资，则至少需要保留1000的积分
                    needLeftAtLeast += 1000
                }

                // 首先尝试使用1500积分兑换5Q币
                if (currentMyPoints >= needLeftAtLeast + 1500) {
                    common.click("点击 [1500积分兑换] 5Q币", 800, 1120)
                    common.click("点击 [确定] 按钮", 540, 1320)
                    currentMyPoints -= 1500
                } else {
                    common.sleep_default_with_msg("当前积分为" + currentMyPoints + "分，为了确保能兑换明日宝藏，当前应至少有" + (needLeftAtLeast + 1500) + "分，故而不使用1500积分兑换本次的5Q币")
                }
                // 然后再尝试使用300积分兑换1Q币
                if (currentMyPoints >= needLeftAtLeast + 300) {
                    common.click("点击 [300积分兑换] 1Q币", 800, 725)
                    common.click("点击 [确定] 按钮", 540, 1320)
                    currentMyPoints -= 300
                } else {
                    common.sleep_default_with_msg("当前积分为" + currentMyPoints + "分，为了确保能兑换明日宝藏，当前应至少有" + (needLeftAtLeast + 300) + "分，故而不使用300积分兑换本次的1Q币")
                }
                break

            case "活动中心":
                common.headline("明日宝藏")
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

                tomorrowTreasureProcessed = true
                break

            default:
                common.sleep_default_with_msg("活动 【" + title + "】目前尚未支持，将跳过~")
        }
    } else {
        common.sleep_default_with_msg("活动 【" + title + "】 已经处理过了，将直接跳过~")
    }

    common.back()
}


common.back_to_top("返回首页", 1, 3000)

common.foot()
