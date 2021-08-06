let common = require("_common.js")

common.init("hello语音dnf活动自动化脚本")
//
// common.reLaunchPackage("重新打开 hello语音", "com.yy.huanju")
//
// common.click("处理可能弹出的开屏活动页", 935, 420)
// common.click("处理首次登录会弹出的签到按钮", 540, 1425)
// common.back_to_top("按多次back，确保跳到最顶层", 5, 3000)

common.headline("获取Hello贝")
common.click("点击 [首页] Tab", 105, 2050)
common.click("点击 [游戏] 分页", 78, 160)
common.click_sleep_long("点击 [游戏中心]", 200, 720)
common.click_text("点击 [福利与活动]", "福利与活动")
common.click_text("点击 [我的hello贝]", "我的hello贝")
common.click("点击 登录DNF助手 右侧的 [去完成]", 930, 2100)
common.sleep_default_with_msg("等待助手进入完毕")
common.exit_current_app("退出DNF助手，回到Hello语音")
common.sleep_default_with_msg("等待助手退出完毕")
common.click("点击 登录DNF助手 右侧的 [领取]", 930, 2100)
common.back_to_top("返回首页", 2, 3000)

common.headline("获取Hello贝")
common.click("点击 [首页] Tab", 105, 2050)
common.click("点击 [游戏] 分页", 78, 160)
common.click_sleep_long("点击 [游戏中心]", 200, 720)
common.click_text("点击 [DNF家族]", "DNF家族")
common.click_text("点击 [回家]", "回家")
common.click_sleep_long("点击 [签到]", 185, 1370)
common.back_to_top("返回首页", 4, 3000)

common.foot()
