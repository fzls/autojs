// auto.js参考文档：https://hyb1996.github.io/AutoJs-Docs/

module.exports = {
    // 所有辅助脚本初始化的操作
    init: function (operationName) {
        this.log("即将开始运行 " + operationName)
        this.sleep_default()

        // 确保无障碍服务已启用
        auto.waitFor()

        // 若处于锁屏状态，则解锁
        if (!device.isScreenOn()) {
            device.wakeUp()
            sleep(1000)
            this.swipe("下拉状态栏", 500, 30, 500, 1000, 300)
            this.click("点击时间", 250, 230)
        }
    },

    // 双击退出当前应用
    exit_current_app: function (msg) {
        this.log(msg)
        // 双击back，退出当前应用
        back()
        back()
    },

    // -- 对常用函数的一些封装 --
    launchPackage: function (msg, packageName) {
        this.log(msg)
        launchPackage(packageName)
        this.sleep_long()
    },
    click: function (msg, x, y) {
        this.log(msg)
        click(x, y)
        this.sleep_default()
    },
    click_sleep_long: function (msg, x, y) {
        this.log(msg)
        click(x, y)
        this.sleep_long()
    },
    double_click: function (msg, x, y) {
        this.log(msg)
        click(x, y)
        click(x, y)
        this.sleep_default()
    },
    swipe: function (msg, x1, y1, x2, y2, duration) {
        this.log(msg)
        swipe(x1, y1, x2, y2, duration)
        this.sleep_default()
    },

    // 退出到最顶层
    back_to_top: function (msg, maxLevel, waitMillSeconds) {
        this.log(msg)
        for (let i = 0; i < maxLevel; i++) {
            back()
            sleep(waitMillSeconds)
        }
    },
    back: function () {
        this.log("回到上一层")
        back()
        this.sleep_default()
    },

    // -- 一些辅助函数 --

    headline: function (msg) {
        sideMsg = "--"
        this.log(sideMsg + " " + msg + " " + sideMsg)
        this.sleep_default()
    },

    foot: function () {
        this.log("操作完成，请看看是否ok")
    },

    // 在命令行和toast输出日志
    log: function log(msg) {
        console.info(msg)
        toast(msg)
    },

    // 通用等待逻辑
    sleep_default: function () {
        sleep(5000)
    },
    sleep_default_with_msg: function (msg) {
        this.log(msg)
        this.sleep_default()
    },
    sleep_long: function () {
        sleep(8000)
    },
}
