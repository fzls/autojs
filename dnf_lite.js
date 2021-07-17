let common = require("_common.js")

common.init("dnf助手 Lite")

common.launchPackage("打开助手app并等待一段时间", "com.tencent.gamehelper.dnf")
common.back_to_top("按多次back，确保跳到最顶层", 5, 3000)

common.headline("打开DNF Lite")
common.click("点击 [三横杠] 进入左侧栏", device.width*0.065, device.height*0.06)
common.click("点击 [DNF Lite]", device.width*0.075, device.height*0.47)
common.sleep_default()
common.click("点击 [开始]", device.width*0.5, device.height*0.945)

main()

// common.click("点击 [抽一次]", 335, 1500)
// common.click("点击 [抽十次]", 775, 1500)

function main(){
    var stop = false
    // 抽奖并挑战
    while(!stop){
        freeLottery()
        var flag = payLottery()
        if(!flag)
            stop = start()
    }
}

function start(){
    var flag = false
    common.click("点击 [地下城]", 500, 1850)
    var sences = ["继续挑战","进入阿拉德","进入天界"]
    for (sence of sences) {
        while(text(sence).exists()){
            common.click_text("点击 [挑战]",sence)
            sleep(3000)
            if(text("挑战地下城").exists()){
                break
            }
            flag = true
            challenge()
        }
    }
    common.click("点击 [关闭]", device.width*0.5, device.height*0.86)
    return flag
}

function challenge(){
    while(desc("GO>").exists()){
        // common.click("点击 [摇色子]", 550, 1970)
        desc("GO>").click()
        sleep(6000)
        fighting()
    }
}

function fighting(){
    if(click("挑战")){
        sleep(8000)
        if(text("跳过").exists())
            common.click_text("点击 [跳过]","跳过")
        while(!desc("GO>").exists()){
            sleep(1000)
            common.click("点击屏幕", device.width*0.51, device.height*0.59)
            if(text("挑战地下城").exists())
                break
        }
    }
}

function freeLottery(){
    let free = className("android.view.View").text("免费").find()
    for (let item of free) {
        item.parent().child(0).click()
        sleep(3000)
        common.click("点击 [空白处]", device.width*0.8, device.height*0.4)
        sleep(1000)
    }
}

function payLottery(){
    common.click("点击 [抽十次]", device.width*0.72, device.height*0.68)
    // 判断是否还有金币抽奖
    sleep(3000)
    if(!text("获得道具").exists())
        return false
    for (let i = 0; i < 10; i++) {
        common.click("点击 [空白处]", device.width*0.8, device.height*0.4)
        sleep(1000)
    }
    return true
}

// common.back_to_top("返回首页", 2, 3000)

engines.myEngine().forceStop();

// common.foot()
