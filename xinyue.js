var common = require("_common.js")

common.init("心悦app G分脚本")

common.launchPackage("打开心悦app", "com.tencent.tgclub")
common.click("点击 [屏幕中央] 以进入可能存在的开屏推送", 500, 1400)
common.back()

common.headline("G分相关内容")
common.click("点击 [权益] Tab", 950, 2100)
common.click("点击 [G分] 按钮", 740, 600)

common.headline("G分签到")
common.click("点击 [立即签到] 按钮", 540, 475)
common.click("点击 [确认] 按钮", 550, 1360)

common.headline("赚G分")
common.swipe("上滑直至[赚G分]内容完全展现", 540, 2100, 540, 150, 1000)

common.headline("周礼包")
common.click("点击 [心悦周礼包] 区域", 400, 1900)
common.click("点击 [一键领取] 按钮", 900, 1615)
common.click("点击 [X] 以关闭领取成功", 925, 875)
common.click("点击 [X] 以关闭待领取通知", 925, 990)
let remainingLotteryCount = parseInt(className("android.view.View").depth(9).findOne().text(), 10)
common.sleep_default_with_msg("剩余免费抽奖次数为" + remainingLotteryCount + "次")
for (let i = 0; i < remainingLotteryCount; i++) {
    common.click("点击 [免费抽奖] 按钮", 540, 1375)
    common.click("点击 [稍后查看] 按钮", 365, 1475)
}
common.back()

common.headline("理财礼卡已经下线，没必要搞了-。-")
// common.click("点击 [理财礼卡] 区域", 950, 1900)
// common.swipe("上滑直至[四个礼包]内容居中", 540, 1600, 540, 1100, 1000)
// common.click("点击 [600G分购买] 升级版月卡", 750, 1777)
// common.click("点击 [确认购买] 升级版月卡", 350, 1250)
// common.click("点击 [300G分购买] 体验版月卡", xxxxxxxx, yyyyyyy)
// common.click("点击 [确认购买] 体验版月卡", xxxxxxxx, yyyyyyy)

common.headline("游戏礼包")
common.swipe("下滑直至[游戏礼包]内容完全展现", 540, 500, 540, 2100, 1000)
common.click("点击 [游戏礼包] 区域", 200, 800)
common.click("点击 [复活币*5] 右侧的兑换按钮", 930, 1060)
common.click("点击 [确认兑换] 按钮", 760, 1430)
common.click("点击 [确认] 按钮", 550, 1360)
common.back()

common.headline("心悦猫咪")
common.headline("领取历练奖励")
common.click("点击 [心悦猫咪] 区域", 525, 910)
common.sleep("加载很慢，多等一段时间", 25)
common.click("点击 [领取礼包] 按钮", 170, 1725)
common.click("点击 [好的] 按钮", 550, 1380)
common.back()

common.headline("战斗与历练")
common.click("点击 [心悦猫咪] 区域", 525, 910)
common.sleep("加载很慢，多等一段时间", 25)
let infoListView = className("android.widget.ListView").depth(11).rowCount(3).findOne()
let gPoints = parseInt(infoListView.child(0).text(), 10)
let fightingCapacity = parseInt(infoListView.child(1).text(), 10)
let yuanQi = parseInt(infoListView.child(2).text(), 10)

let totalFightCount = Math.floor(yuanQi / 20)
common.headline("将进行战斗次数为：" + totalFightCount)
if (totalFightCount > 0) {
    let fightUsingTime = 15

    common.click("点击 [战斗] 按钮，触发首次战斗", 420, 1725)
    common.sleep("等待猫咪战斗结束", fightUsingTime)

    for (let i = 2; i <= totalFightCount; i++) {
        common.click("点击 [我还能打] 按钮，触发第" + i + "次战斗", 710, 1350)
        common.sleep("等待猫咪战斗结束", fightUsingTime)
    }

    common.click("点击 [不了怕了] 按钮", 370, 1350)
} else {
    common.sleep_default_with_msg("元气不足20，无法进行战斗")
}

common.headline("历练")
if (fightingCapacity >= 15) {
    common.click("点击 [历练] 按钮", 170, 1725)
    let levelPos = {x: 850, y: 1750}
    if (15 <= fightingCapacity && fightingCapacity < 55) {
        // 关卡1
        levelPos.x = 850
        levelPos.y = 1750
    } else if (55 <= fightingCapacity && fightingCapacity < 90) {
        // 关卡1
        levelPos.x = 250
        levelPos.y = 1200
    } else if (15 <= fightingCapacity && fightingCapacity < 55) {
        // 关卡1
        levelPos.x = 875
        levelPos.y = 900
    } else if (15 <= fightingCapacity && fightingCapacity < 55) {
        // 关卡1
        levelPos.x = 500
        levelPos.y = 575
    }
    common.click("点击 [当前能打的最高关卡] 按钮", levelPos.x, levelPos.y)
    common.click("点击 [去吧] 按钮", 700, 1500)
} else {
    common.sleep_default_with_msg("战力不足15，无法进行历练~")
}
common.back()

common.back()

common.foot()
