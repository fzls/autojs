// auto.js参考文档：https://hyb1996.github.io/AutoJs-Docs/

module.exports = {
    // 通用等待逻辑
    sleep_default: function () {
        sleep(5000)
    },
    sleep_long: function () {
        sleep(8000)
    },

    // 在命令行和toast输出日志
    log: function log(msg) {
        console.info(msg)
        toast(msg)
    },

    // 所有辅助脚本初始化的操作
    init: function () {
        // 确保无障碍服务已启用
        auto.waitFor()

        // 若处于锁屏状态，则解锁
        if (!device.isScreenOn()) {
            device.wakeUp()
            sleep(1000)
            //下拉状态栏
            swipe(500, 30, 500, 1000, 300)
            sleep(1000)
            //点击时间
            click(250, 230)
            sleep(2000)
        }
    },

    // 双击退出当前应用
    exit_current_app: function () {
        // 双击back，退出当前应用
        back()
        back()
    },

    // 退出到最顶层
    back_to_top: function (maxLevel, waitMillSeconds) {
        for (let i = 0; i < maxLevel; i++) {
            back()
            sleep(waitMillSeconds)
        }
    }
}
