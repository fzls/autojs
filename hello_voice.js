let common = require("_common.js")

common.init("hello语音dnf活动自动化脚本")

common.launchPackage("打开hello语音", "com.yy.huanju")
common.click("处理可能弹出的开屏活动页", 935, 420)
common.click("处理首次登录会弹出的签到按钮", 540, 1425)
common.back_to_top("按多次back，确保跳到最顶层", 5, 3000)

common.headline("获取Hello贝")
common.click("点击 [首页] Tab", 105, 2050)
common.click("点击 [游戏] 分页", 78, 160)
common.click_sleep_long("点击 [福利中心]", 310, 800)
common.click("点击 [获取Hello贝]", 300, 670)
common.click("点击 登录DNF助手 右侧的 [去完成]", 930, 2100)
common.sleep_default_with_msg("等待助手进入完毕")
common.exit_current_app("退出DNF助手，回到Hello语音")
common.sleep_default_with_msg("等待助手退出完毕")
common.click("点击 登录DNF助手 右侧的 [领取]", 930, 2100)
common.back_to_top("返回首页", 2, 3000)

common.headline("进入活动界面")
common.click("点击 [首页] Tab", 105, 2050)
common.click("点击 [游戏] 分页", 78, 160)
common.click_sleep_long("点击 [福利中心]", 310, 800)
common.click("点击 [使用Hello贝]", 800, 670)

common.headline("Hello助力通关黑鸦")
common.click_sleep_long("点击 [Hello助力通关黑鸦]", 530, 1600)
common.swipe("上滑直至[进阶奖励]处于页面最上方", 550, 1950, 550, 70, 1000)

common.click("点击 [进阶奖励]", 270, 315)
common.click("点击 [成团礼包]", 550, 950)
common.click("点击 [一级团]", 925, 1280)
common.click("点击 [确定]", 550, 1244)
common.click("点击 [二级团]", 925, 1640)
common.click("点击 [确定]", 550, 1244)
common.click("点击 [三级团]", 925, 2000)
common.click("点击 [确定]", 550, 1244)

common.click("点击 [每日训练]", 810, 315)
common.click("点击 [签到]", 920, 600)
common.swipe("上滑直至[每日训练回馈抽奖] 相关内容完整出现在页面下方", 550, 1950, 550, 200, 1000)
for (let i = 0; i < 3; i++) {
    common.click_sleep_long("点击 [抽奖]", 550, 1000)
    common.click("点击 [确定] 以跳过抽奖成功提示", 755, 1330)
    common.click("点击 [确定] 以跳过抽奖次数不足提示", 540, 1270)
}
common.click("点击 [领取] 累积抽奖3次", 220, 1900)
common.click("点击 [确定]", 550, 1244)
common.click("点击 [领取] 累积抽奖7次", 545, 1900)
common.click("点击 [确定]", 550, 1244)
common.click("点击 [领取] 累积抽奖15次", 865, 1900)
common.click("点击 [确定]", 550, 1244)
common.back() // 回到上一层以方便后续操作

common.back_to_top("返回首页", 2, 3000)

common.foot()
