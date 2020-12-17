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

// 获取一下最新G分数值，供后续逻辑使用
let currentGPoints = parseInt(className("android.widget.TextView").id("new_integral_value_txt").findOne().text(), 10)
common.sleep_default_with_msg("当前G分为" + currentGPoints)

common.click("点击 [游戏礼包] 区域", 200, 800)

// 只有在G分不低于600（妆容-贤德昭仪）+300（装饰-小橘子）+本次兑换所需G分时，才尝试进行本次的兑换
let needLeftAtLeast = 600 + 300
if (currentGPoints >= needLeftAtLeast + 44) {
    let exchangeFuHuoCoinButton = className("android.widget.TextView").textContains("复活币*5").findOne().parent().parent().child(2)
    let buttonY = exchangeFuHuoCoinButton.bounds().centerY()
    common.sleep_default_with_msg("复活币所在Y轴为" + buttonY)

    common.click("点击 [复活币*5] 右侧的兑换按钮", 930, buttonY)
    common.click("点击 [确认兑换] 按钮", 760, 1430)
    common.click("点击 [确认] 按钮", 550, 1360)
    currentGPoints -= 44
} else {
    common.sleep_default_with_msg("当前G分为" + currentGPoints + "分，为了确保能购买心悦猫咪的妆容和装饰，当前应至少有" + (needLeftAtLeast + 44) + "分，故而不使用44G分兑换本次的复活币*5")
}

common.back()

common.headline("心悦猫咪")

common.headline("领取历练奖励")
common.click("点击 [心悦猫咪] 区域", 525, 910)
common.sleep("加载很慢，多等一段时间", 25)
common.click("点击 [领取礼包] 按钮", 170, 1725)
common.click("点击 [好的] 按钮", 550, 1380)
common.back()

common.headline("尝试购买妆容和装饰")
common.click("点击 [心悦猫咪] 区域", 525, 910)
common.sleep("加载很慢，多等一段时间", 25)
common.click("点击 [商店] 按钮", 910, 1725)
common.click("点击 [妆容] 按钮", 290, 390)
makeupMap = {
    "Carry猫": "icon-23",
    "雪豹战士": "icon-20",
    "贤德昭仪": "icon-09",
    "月半半": "icon-17",
    "屠龙勇士": "icon-13",
    "杰克国王": "icon-08",
    "浪子刀客": "icon-03",
    "加班女仆": "icon-02",
}
common.sleep_default_with_msg("目前G分不太够，先不购买600G分的贤德昭仪。等G分超过1000的时候来弄下这个~")
// locateItemAndTryBuyIt( "贤德昭仪", makeupMap)

common.click("点击 [装饰] 按钮", 790, 390)
decorationMap = {
    "云裳童心饰": "icon-06",
    "云裳茶壶": "icon-05",
    "飞车酷比": "icon-01",
    "飞车墨汁": "icon-02",
    "炫舞粉66": "icon-03",
    "炫舞酷66": "icon-04",
    "小橘子": "icon-07",
    "喷香猫粮": "icon-00",
}
locateItemAndTryBuyIt("小橘子", decorationMap)

function locateItemAndTryBuyIt(targetName, nameToIconTextMap) {
    iconText = nameToIconTextMap[targetName]
    let notOwnText = className("android.view.View").text("未拥有").findOne()
    let itemList = notOwnText.parent().parent().parent().child(1).child(0)
    for (let i = 0; i < itemList.childCount(); i++) {
        item = itemList.child(i)

        let image_icon = item.child(item.childCount() - 2).child(0).text()
        if (image_icon !== iconText) {
            continue
        }

        item.click()
        common.sleep_default_with_msg("已定位到【" + targetName + "】，并完成点击，等待一会确保状态显示完成")

        let infoPanel = notOwnText.parent().parent().parent().parent().parent().child(1)
        let buyButton = infoPanel.child(1)
        if (buyButton.text() === "已拥有") {
            common.sleep_default_with_msg("已经拥有 " + targetName + " ，本次不尝试购买")
        } else {
            common.sleep_default_with_msg("尚未拥有 " + targetName + " ，即将尝试进行购买")
            common.click("点击购买 " + targetName, buyButton.bounds().centerX(), buyButton.bounds().centerY())
            // common.click("点击 取消", 350,1250)
            common.click("点击 确定", 735, 1250)
        }

        // 找到目标后停止处理
        break
    }
}

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
