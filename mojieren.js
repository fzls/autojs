let common = require("_common.js")

common.init("点击微信支付按钮来尝试购买魔界人粘土人")

common.launchPackage("打开chrome", "com.android.chrome")

const initDuration = 10
const waitDuration = 5
const payUrl = "https://dnfcity.qq.com/mobile/html/cart_pay.html####"

common.sleep("请在 " + initDuration + " 秒内打开魔界人支付界面（需要先在购物车页面完成登录），以便脚本进行点击尝试。链接为  " + payUrl + "", initDuration)

let tryIndex = 0;
while (true) {
    tryIndex += 1
    common.click_text("[ " + tryIndex + " ] 点击 [微信支付]，并在 " + waitDuration + " 秒后重试", "微信支付")
}

common.foot()
